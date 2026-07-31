import artificer from "./characters/artificer";
import { useState } from "react";

function App() {
  let char = artificer
  const [hp, setHp] = useState(char.hp)
  const [tempHp, setTempHp] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const str_mod = Math.floor((char.str - 10) / 2)
  const dex_mod = Math.floor((char.dex - 10) / 2)
  const con_mod = Math.floor((char.con - 10) / 2)
  const int_mod = Math.floor((char.int - 10) / 2)
  const wis_mod = Math.floor((char.wis - 10) / 2)
  const cha_mod = Math.floor((char.cha - 10) / 2)
  const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha']
  const abilitie_objects = [
    {name: 'str', val: str_mod},
    {name: 'dex', val: dex_mod},
    {name: 'con', val: con_mod},
    {name: 'int', val: int_mod},
    {name: 'wis', val: wis_mod},
    {name: 'cha', val: cha_mod},
  ]
  const skills = [
    {name: 'acrobatice', val: dex_mod}, 
    {name: 'animal', val: wis_mod}, 
    {name: 'arcana', val: int_mod}, 
    {name: 'athletics', val: str_mod}, 
    {name: 'deception', val: cha_mod}, 
    {name: 'history', val: int_mod}, 
    {name: 'insight', val: wis_mod}, 
    {name: 'intimidation', val: cha_mod}, 
    {name: 'investigation', val: int_mod}, 
    {name: 'medicine', val: wis_mod}, 
    {name: 'nature', val: int_mod}, 
    {name: 'perception', val: wis_mod}, 
    {name: 'performance', val: cha_mod}, 
    {name: 'persuasion', val: cha_mod}, 
    {name: 'religion', val: int_mod}, 
    {name: 'sleight', val: dex_mod}, 
    {name: 'stealth', val: dex_mod}, 
    {name: 'survival', val: wis_mod}
  ]
  
  return (
    <div className="container">
      { isOpen &&      
        <div className="box" onClick={() => setIsOpen(false)}>
          <p>this is box</p>
        </div>
      }
      <div className="button-container">
        <button onClick={() => setIsOpen(true)}>hej</button>
        <button>tjo</button>
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
        <div id="class"  className="input start" >{char.class} {char.subclass}</div>
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
        <div id="temp_hp" className="input" style={{top: 368, left: 320, width: 208, height: 45, justifyContent: 'space-evenly'}}>
          <button onClick={() => setTempHp(tempHp - 1)}>-</button>
          {tempHp}
          <button onClick={() => setTempHp(tempHp + 1)}>+</button>
        </div>
        <div id="max_hp2" className="input" style={{top: 442, left: 343, width: 66, height: 14}}>{char.hp}</div>
        <div id="hit_dice" className="input" style={{top: 460, left: 330, width: 70, height: 32}}>{char.hit_dice}</div>
        {/* Stats */}
        <div id="str" className="input" style={{top: 213, left: 50, width: 59, height: 39}}>{char.str}</div>
        <div id="str_mod" className="input" style={{top: 259, left: 65, width: 29, height: 18}}>{str_mod}</div>
        <div id="dex" className="input" style={{top: 313, left: 50, width: 59, height: 39}}>{char.dex}</div>
        <div id="dex_mod" className="input" style={{top: 359, left: 65, width: 29, height: 18}}>{dex_mod}</div>
        <div id="con" className="input" style={{top: 412, left: 50, width: 59, height: 39}}>{char.con}</div>
        <div id="con_mod" className="input" style={{top: 458, left: 65, width: 29, height: 18}}>{con_mod}</div>
        <div id="int" className="input" style={{top: 512, left: 50, width: 59, height: 39}}>{char.int}</div>
        <div id="int_mod" className="input" style={{top: 558, left: 65, width: 29, height: 18}}>{int_mod}</div>
        <div id="wis" className="input" style={{top: 612, left: 50, width: 59, height: 39}}>{char.wis}</div>
        <div id="wis_mod" className="input" style={{top: 657, left: 65, width: 29, height: 18}}>{wis_mod}</div>
        <div id="cha" className="input" style={{top: 710, left: 50, width: 59, height: 39}}>{char.cha}</div>
        <div id="cha_mod" className="input" style={{top: 756, left: 65, width: 29, height: 18}}>{cha_mod}</div>
        <div id="passive_perception" className="input" style={{top: 821, left: 44, width: 31, height: 23}}>
          {char.proficiencies.skills.includes('perception') ? 10 + wis_mod + char.pb : 10 + wis_mod}
        </div>
        {/* Saving Throws */}
        {abilities.map(function(x) {
          return <div id={`st_${x}`} className="check" style={{background: char.proficiencies.saving.includes(x) ? 'black': 'none'}}></div>
        })}
        {abilitie_objects.map(function(x) {
          return <div id={`st_${x.name}_val`} className="input saving">{char.proficiencies.saving.includes(x.name) ? char.pb + x.val : x.val}</div>
        })}
        {/* Skills */}
        {skills.map(function(x) {
          let color = char.proficiencies.skills.includes(x.name) ? 'black': 'none'
          let val = char.proficiencies.skills.includes(x.name) ? char.pb + x.val : x.val
          return (
            <div>
              <div id={`check_${x.name}`} className="check" style={{background: color}}></div>
              <div id={`${x.name}`} className="input skill">{val}</div>
            </div>
          )
        })}
        <div id="other" className="list" style={{top: 867, left: 44, width: 237, height: 185}}>
          <div className="row">
            <b>Armor:&nbsp;</b>
            {char.proficiencies.armor.length ? char.proficiencies.armor.map(function(x, i){
              return <div id={`armor_${i}`}>{x},&nbsp;</div>
            }) : 'None'}
          </div>
          <div className="row">
            <b>Weapons:&nbsp;</b>
            {char.proficiencies.weapons.length ? char.proficiencies.weapons.map(function(x, i){
              return <div id={`weapons_${i}`}>{x},&nbsp;</div>
            }) : 'None'}
          </div>
          <div className="row">
            <b>Tools:&nbsp;</b>
            {char.proficiencies.tools.length ? char.proficiencies.tools.map(function(x, i){
              return <div id={`tools_${i}`}>{x},&nbsp;</div>
            }) : 'None'}
          </div>
          <div className="row">
            <b>Lang:&nbsp;</b>
            {char.proficiencies.languages.length ? char.proficiencies.languages.map(function(x, i){
              return <div id={`armor_${i}`}>{x},&nbsp;</div>
            }) : 'None'}
          </div>
        </div>
        {/* Attacks */}
        <div id="attack_name_1" className="input start" style={{top: 545, left: 310, width: 88, height: 21}}>Crossbow</div>
        <div id="attack_attack_1" className="input start" style={{top: 545, left: 405, width: 43, height: 21}}>7</div>
        <div id="attack_damage_1" className="input start" style={{top: 545, left: 454, width: 86, height: 21, fontSize: '12px'}}>1d6+5/piercing</div>
        <div id="attack_name_2" className="input start" style={{top: 574, left: 310, width: 88, height: 21}}>Bayblade</div>
        <div id="attack_attack_2" className="input start" style={{top: 574, left: 405, width: 43, height: 21}}>4</div>
        <div id="attack_damage_2" className="input start" style={{top: 574, left: 454, width: 86, height: 21, fontSize: '12px'}}>1d8+{char.pb}/force</div>
        <div id="attack_name_3" className="input start" style={{top: 602, left: 310, width: 88, height: 21}}>Thunderclap</div>
        <div id="attack_attack_3" className="input start" style={{top: 602, left: 405, width: 43, height: 21}}>4</div>
        <div id="attack_damage_3" className="input start" style={{top: 602, left: 454, width: 86, height: 21, fontSize: '12px'}}>1d6/thunder</div>

        <div className="list" style={{top: 629, left: 307, width: 226, height: 152}}>
          {char.spells.cantrips.length ? char.spells.cantrips.map(function(x, i){
            return <div id={`spell_${i}`}>{x.name}</div>
          }) : null}
          {char.spells.lv1.length ? char.spells.lv1.map(function(x, i){
            return <div id={`spell_${i}`}>{x.name}</div>
          }) : null}
        </div>
        


      </div>
    </div>
  );
}

export default App;
