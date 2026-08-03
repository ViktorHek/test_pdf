import artificer from "./characters/artificer";
import hugo from "./characters/hugo_von_sonson";
import { useState } from "react";

function App() {
  let char = hugo
  const [hp, setHp] = useState(char.hp)
  const [tempHp, setTempHp] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [boxContent, setBoxContent] = useState({ title: "Init", text: "None" })
  const str_mod = Math.floor((char.str - 10) / 2)
  const dex_mod = Math.floor((char.dex - 10) / 2)
  const con_mod = Math.floor((char.con - 10) / 2)
  const int_mod = Math.floor((char.int - 10) / 2)
  const wis_mod = Math.floor((char.wis - 10) / 2)
  const cha_mod = Math.floor((char.cha - 10) / 2)
  const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha']
  const abilitie_objects = [
    { name: 'str', val: str_mod },
    { name: 'dex', val: dex_mod },
    { name: 'con', val: con_mod },
    { name: 'int', val: int_mod },
    { name: 'wis', val: wis_mod },
    { name: 'cha', val: cha_mod },
  ]
  const skills = [
    { name: 'acrobatice', val: dex_mod },
    { name: 'animal', val: wis_mod },
    { name: 'arcana', val: int_mod },
    { name: 'athletics', val: str_mod },
    { name: 'deception', val: cha_mod },
    { name: 'history', val: int_mod },
    { name: 'insight', val: wis_mod },
    { name: 'intimidation', val: cha_mod },
    { name: 'investigation', val: int_mod },
    { name: 'medicine', val: wis_mod },
    { name: 'nature', val: int_mod },
    { name: 'perception', val: wis_mod },
    { name: 'performance', val: cha_mod },
    { name: 'persuasion', val: cha_mod },
    { name: 'religion', val: int_mod },
    { name: 'sleight', val: dex_mod },
    { name: 'stealth', val: dex_mod },
    { name: 'survival', val: wis_mod }
  ]

  function openbox(title, text) {
    setBoxContent({ title: title, text: text })
    setIsOpen(!isOpen)
  }

  return (
    <div className="container">
      {isOpen &&
        <div className="box" onClick={() => openbox('no', 'noooo')} style={{ color: 'black' }}>
          <h3>{boxContent.title}</h3>
          <p>{boxContent.text}</p>
        </div>
      }
      <div className="button-container">
        <button onClick={() => openbox('first', 'hej')}>hej</button>
        <button onClick={() => openbox('second', 'tjo')}>tjo</button>
      </div>
      <img
        src="./5E_CharacterSheet_Fillable_page-0001.jpg"
        alt="gg"
        width="850px"
        height="1100px"
      />
      <div className="inputs-container">
        {/* Top */}
        <div id="name" className="input">{char.name}</div>
        <div id="class" className="input start" >{char.class} {char.subclass}</div>
        <div id="background" className="input start" >{char.background}</div>
        <div id="player" className="input start" >Viktor</div>
        <div id="race" className="input start" >{char.race}</div>
        <div id="alignment" className="input start" >{char.alignment}</div>
        <div id="exp" className="input start" >0</div>
        {/* HP */}
        <div id="inspiration" className="input" ></div>
        <div id="pb" className="input" >{char.pb}</div>
        <div id="ac" className="input" >{10 + dex_mod}</div>
        <div id="initiative" className="input" >0</div>
        <div id="speed" className="input" >{char.speed}</div>
        <div id="max_hp" className="input" >{char.hp}</div>
        <div id="current_hp" className="input">
          <button onClick={() => setHp(hp - 1)}>-</button>
          {hp}
          <button onClick={() => setHp(hp + 1)}>+</button>
        </div>
        <div id="temp_hp" className="input">
          <button onClick={() => setTempHp(tempHp - 1)}>-</button>
          {tempHp}
          <button onClick={() => setTempHp(tempHp + 1)}>+</button>
        </div>
        <div id="max_hp2" className="input">{char.hp}</div>
        <div id="hit_dice" className="input">{char.hit_dice}</div>
        <input type="checkbox" id="dss1" className="checkbox" />
        <input type="checkbox" id="dss2" className="checkbox" />
        <input type="checkbox" id="dss3" className="checkbox" />
        <input type="checkbox" id="dsf1" className="checkbox" />
        <input type="checkbox" id="dsf2" className="checkbox" />
        <input type="checkbox" id="dsf3" className="checkbox" />
        {/* Stats */}
        <div id="str_mod" className="input stat_mod" >{str_mod}</div>
        <div id="str" className="input stat_val" >{char.str}</div>
        <div id="dex_mod" className="input stat_mod" >{char.dex}</div>
        <div id="dex" className="input stat_val" >{dex_mod}</div>
        <div id="con_mod" className="input stat_mod" >{char.con}</div>
        <div id="con" className="input stat_val" >{con_mod}</div>
        <div id="int_mod" className="input stat_mod" >{char.int}</div>
        <div id="int" className="input stat_val" >{int_mod}</div>
        <div id="wis_mod" className="input stat_mod" >{char.wis}</div>
        <div id="wis" className="input stat_val" >{wis_mod}</div>
        <div id="cha_mod" className="input stat_mod" >{char.cha}</div>
        <div id="cha" className="input stat_val" >{cha_mod}</div>
        <div id="passive_perception" className="input" >
          {char.proficiencies.skills.includes('perception') ? 10 + wis_mod + char.pb : 10 + wis_mod}
        </div>
        {/* Saving Throws */}
        {abilities.map(function (x) {
          return <div id={`st_${x}`} className="check" style={{ background: char.proficiencies.saving.includes(x) ? 'black' : 'none' }}></div>
        })}
        {abilitie_objects.map(function (x) {
          return <div id={`st_${x.name}_val`} className="input saving">{char.proficiencies.saving.includes(x.name) ? char.pb + x.val : x.val}</div>
        })}
        {/* Skills */}
        {skills.map(function (x) {
          let color = char.proficiencies.skills.includes(x.name) ? 'black' : 'none'
          let val = char.proficiencies.skills.includes(x.name) ? char.pb + x.val : x.val
          return (
            <div>
              <div id={`check_${x.name}`} className="check" style={{ background: color }}></div>
              <div id={`${x.name}`} className="input skill">{val}</div>
            </div>
          )
        })}
        <div id="other" className="list">
          <div className="row">
            <b>Armor:&nbsp;</b>
            {char.proficiencies.armor.length ? char.proficiencies.armor.map(function (x, i) {
              return <div id={`armor_${i}`}>{x},&nbsp;</div>
            }) : 'None'}
          </div>
          <div className="row">
            <b>Weapons:&nbsp;</b>
            {char.proficiencies.weapons.length ? char.proficiencies.weapons.map(function (x, i) {
              return <div id={`weapons_${i}`}>{x},&nbsp;</div>
            }) : 'None'}
          </div>
          <div className="row">
            <b>Tools:&nbsp;</b>
            {char.proficiencies.tools.length ? char.proficiencies.tools.map(function (x, i) {
              return <div id={`tools_${i}`}>{x},&nbsp;</div>
            }) : 'None'}
          </div>
          <div className="row">
            <b>Lang:&nbsp;</b>
            {char.proficiencies.languages.length ? char.proficiencies.languages.map(function (x, i) {
              return <div id={`armor_${i}`}>{x},&nbsp;</div>
            }) : 'None'}
          </div>
        </div>
        {/* Attacks */}
        <div id="attack_name_1" className="input start">Crossbow</div>
        <div id="attack_attack_1" className="input start">7</div>
        <div id="attack_damage_1" className="input start">1d6+5/piercing</div>
        <div id="attack_name_2" className="input start">Bayblade</div>
        <div id="attack_attack_2" className="input start">4</div>
        <div id="attack_damage_2" className="input start">1d8+{char.pb}/force</div>
        <div id="attack_name_3" className="input start">Thunderclap</div>
        <div id="attack_attack_3" className="input start">4</div>
        <div id="attack_damage_3" className="input start">1d6/thunder</div>
        <div id="attack_list" className="list">
          {char.spells.cantrips.length ? char.spells.cantrips.map(function (x, i) {
            return <div id={`spell_${i}`} onClick={() => openbox(x.name, x.val)}>{x.name}</div>
          }) : null}
          {char.spells.lv1.length ? char.spells.lv1.map(function (x, i) {
            return <div id={`spell_${i}`} onClick={() => openbox(x.name, x.val)}>{x.name}</div>
          }) : null}
        </div>
        {/* Equipment */}
        <div id="equipment" className="list">
          {char.equipment.length ? char.equipment.map(function (x) {
            return <div id={`equipment_${x.name}`} onClick={() => openbox(x.name, x.val)}>{x.name}</div>
          }) : 'None'}
        </div>
        <div id="cp" className="input">{char.copper}</div>
        <div id="sp" className="input">{char.silver}</div>
        <div id="ep" className="input"></div>
        <div id="gp" className="input">{char.gold}</div>
        <div id="pp" className="input"></div>
        {/* Right side */}
        <div id="trait" className="input">
          spell slots
        </div>
        <div id="ideals" className="input">cantrips</div>
        <div id="bonds" className="input">spells</div>
        <div id="flaws" className="input">other abilities</div>
        <div id="feats" className="list">
          {char.feat.length ? char.feat.map(function (x) {
            return <div id={`feat_${x.name}`} onClick={() => openbox(x.name, x.val)}>{x.name}</div>
          }) : 'None'}
        </div>
      </div>
    </div>
  );
}

export default App;
