import artificer from "./characters/artificer";
import hugo from "./characters/hugo_von_sonson";
import dedd from "./characters/druid_spored";
import { useState } from "react";

function App() {
  // let char = dedd
  const [char, setchar] = useState(hugo);
  const [hp, setHp] = useState(char.hp);
  const [tempHp, setTempHp] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [spellOpen, setSpellOpen] = useState(false);
  const [boxContent, setBoxContent] = useState({ title: "Init", text: "None" });
  const all_spells = char.spells.cantrips.concat(
    char.spells.lv1,
    char.spells.lv2,
    char.spells.lv3,
    char.spells.lv4,
    char.spells.lv5,
    char.spells.lv6,
    char.spells.lv7,
    char.spells.lv8,
    char.spells.lv9,
    char.spells.lv10,
  );
  const [spellList, setSpellList] = useState([]);
  const [spellTitle, setSpellTitle] = useState("");
  const [spell, setSpell] = useState(null);
  const [familiar, setfamiliar] = useState(null);
  const str_mod = Math.floor((char.str - 10) / 2);
  const dex_mod = Math.floor((char.dex - 10) / 2);
  const con_mod = Math.floor((char.con - 10) / 2);
  const int_mod = Math.floor((char.int - 10) / 2);
  const wis_mod = Math.floor((char.wis - 10) / 2);
  const cha_mod = Math.floor((char.cha - 10) / 2);
  const abilities = ["str", "dex", "con", "int", "wis", "cha"];
  const abilitie_objects = [
    { name: "str", val: str_mod },
    { name: "dex", val: dex_mod },
    { name: "con", val: con_mod },
    { name: "int", val: int_mod },
    { name: "wis", val: wis_mod },
    { name: "cha", val: cha_mod },
  ];
  const skills = [
    { name: "acrobatice", val: dex_mod },
    { name: "animal", val: wis_mod },
    { name: "arcana", val: int_mod },
    { name: "athletics", val: str_mod },
    { name: "deception", val: cha_mod },
    { name: "history", val: int_mod },
    { name: "insight", val: wis_mod },
    { name: "intimidation", val: cha_mod },
    { name: "investigation", val: int_mod },
    { name: "medicine", val: wis_mod },
    { name: "nature", val: int_mod },
    { name: "perception", val: wis_mod },
    { name: "performance", val: cha_mod },
    { name: "persuasion", val: cha_mod },
    { name: "religion", val: int_mod },
    { name: "sleight", val: dex_mod },
    { name: "stealth", val: dex_mod },
    { name: "survival", val: wis_mod },
  ];

  function openbox(title, val) {
    if (title == "familiar") {
      setBoxContent({ title: val.name, text: "" });
      setfamiliar(val);
    } else {
      setBoxContent({ title: title, text: val });
    }
    setIsOpen(!isOpen);
    setSpellOpen(false);
  }

  function openSpellbox(val) {
    setIsOpen(false);
    setSpellList(null);
    if (val == "cantrips") {
      setSpellTitle("Cantrips");
      setSpellList(char.spells.cantrips);
    } else if (val == "my") {
      setSpellTitle("My Spells");
      setSpellList([char.spells.lv1[0]]);
    } else {
      setSpellTitle("All Spells");
      setSpellList(all_spells);
    }
    setSpellOpen(!spellOpen);
  }

  function changeChar(val) {
    setchar(val);
  }

  function backToSpells() {
    setSpell(null);
  }

  function selectSpell(val) {
    let s = all_spells.find(({ name }) => name === val);
    let obj = {
      name: s.name,
      casting_time: s.casting_time,
      range: s.range,
      components: s.components,
      duration: s.duration,
      val: s.val,
      levels: s.levels ? s.levels : null
    };
    setSpell(obj);
  }

  return (
    <div className="container">
      {isOpen && (
        <div className="box">
          <div className="title">
            <div>{boxContent.title}</div>
            <div onClick={() => openbox("", "")} className="close-btn click">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="body">
            {familiar ? (
              <div className="familiar">
                <div>Armor Class: {familiar.ac}</div>
                <div>Hit Points: {familiar.hp}</div>
                <div>Speed: {familiar.speed}</div>
                <span></span>
                <div>Abilities</div>
                <div className="abi">
                  {[
                    { name: "str", val: familiar.str },
                    { name: "dex", val: familiar.dex },
                    { name: "con", val: familiar.con },
                    { name: "int", val: familiar.int },
                    { name: "wis", val: familiar.wis },
                    { name: "cha", val: familiar.cha },
                  ].map(function (x) {
                    return (
                      <div id={`fam_${x.name}`}>
                        <div>{x.name}</div>
                        <div>{x.val}</div>
                      </div>
                    );
                  })}
                </div>
                <span></span>
                <div>Skills: {familiar.skills[0]}</div>
                <div>Senses: {familiar.senses}</div>
                <div>Language: {familiar.languages}</div>
                <div>Proficiency Bonus: {familiar.pb}</div>
                <span></span>
                <div>Traits:</div>
                <div>
                  {familiar.traits[0].name}. {familiar.traits[0].val}
                </div>
                <span></span>
                <div>Actions:</div>
                <div>
                  {familiar.actions[0].name}. {familiar.actions[0].val}
                </div>
              </div>
            ) : (
              <div>{boxContent.text}</div>
            )}
          </div>
        </div>
      )}
      {spellOpen && (
        <div>
          {spell ? (
            <div className="box">
              <div className="title">
                <div>{spell.name}</div>
                <div onClick={backToSpells} className="back-arrow click">
                  <span></span>
                </div>
              </div>
              <div className="body">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="full-spell">
                    <div>Casting time: {spell.casting_time}</div>
                    <div>Range: {spell.range}</div>
                    <div>Components: {spell.components}</div>
                    <div>Duration: {spell.duration}</div>
                    <div >{spell.val}</div>
                    {spell.levels && <div>Higher Levels: {spell.levels}</div>}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="box">
              <div className="title">
                <div>{spellTitle}</div>
                <div
                  onClick={() => openSpellbox("", "")}
                  className="close-btn click"
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="body">
                <div 
                  className="spell-list"
                >
                  {spellList.map(function (x) {
                    return (
                      <div
                        id={x.name}
                        className="spell click"
                        onClick={() => selectSpell(x.name)}
                      >
                        <span>{x.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="button-container">
        <button className="click" onClick={() => changeChar(hugo)}>
          Hugo Sonson
        </button>
        <button className="click" onClick={() => changeChar(artificer)}>
          Axel Havoc
        </button>
        <button className="click" onClick={() => changeChar(dedd)}>
          Dedd Valking
        </button>
      </div>
      <img
        src="./5E_CharacterSheet_Fillable_page-0001.jpg"
        alt="gg"
        width="850px"
        height="1100px"
      />
      <div className="inputs-container">
        {/* Top */}
        <div id="name" className="input">
          {char.name}
        </div>
        <div id="class" className="input start">
          {char.class} {char.subclass}
        </div>
        <div id="background" className="input start">
          {char.background}
        </div>
        <div id="player" className="input start">
          Viktor
        </div>
        <div id="race" className="input start">
          {char.race}
        </div>
        <div id="alignment" className="input start">
          Lv {char.level}
        </div>
        <div id="exp" className="input start">
          0
        </div>
        {/* HP */}
        <div id="inspiration" className="input"></div>
        <div id="pb" className="input big">
          {char.pb}
        </div>
        <div id="ac" className="input big">
          {10 + dex_mod + char.armor}
        </div>
        <div id="initiative" className="input big">
          0
        </div>
        <div id="speed" className="input big">
          {char.speed}
        </div>
        <div id="max_hp" className="input">
          {char.hp}
        </div>
        <div id="current_hp" className="input big">
          <button className="click" onClick={() => setHp(hp - 1)}>
            -
          </button>
          {hp}
          <button className="click" onClick={() => setHp(hp + 1)}>
            +
          </button>
        </div>
        <div id="temp_hp" className="input big">
          <button className="click" onClick={() => setTempHp(tempHp - 1)}>
            -
          </button>
          {tempHp}
          <button className="click" onClick={() => setTempHp(tempHp + 1)}>
            +
          </button>
        </div>
        <div id="max_hp2" className="input">
          {char.hp}
        </div>
        <div id="hit_dice" className="input big">
          1d{char.hit_dice}
        </div>
        <input type="checkbox" id="dss1" className="checkbox click" />
        <input type="checkbox" id="dss2" className="checkbox click" />
        <input type="checkbox" id="dss3" className="checkbox click" />
        <input type="checkbox" id="dsf1" className="checkbox click" />
        <input type="checkbox" id="dsf2" className="checkbox click" />
        <input type="checkbox" id="dsf3" className="checkbox click" />
        {/* Stats */}
        <div id="str_mod" className="input stat_mod big">
          {str_mod}
        </div>
        <div id="str" className="input stat_val">
          {char.str}
        </div>
        <div id="dex_mod" className="input stat_mod big">
          {dex_mod}
        </div>
        <div id="dex" className="input stat_val">
          {char.dex}
        </div>
        <div id="con_mod" className="input stat_mod big">
          {con_mod}
        </div>
        <div id="con" className="input stat_val">
          {char.con}
        </div>
        <div id="int_mod" className="input stat_mod big">
          {int_mod}
        </div>
        <div id="int" className="input stat_val">
          {char.int}
        </div>
        <div id="wis_mod" className="input stat_mod big">
          {wis_mod}
        </div>
        <div id="wis" className="input stat_val">
          {char.wis}
        </div>
        <div id="cha_mod" className="input stat_mod big">
          {cha_mod}
        </div>
        <div id="cha" className="input stat_val">
          {char.cha}
        </div>
        <div id="passive_perception" className="input">
          {char.proficiencies.skills.includes("perception")
            ? 10 + wis_mod + char.pb
            : 10 + wis_mod}
        </div>
        {/* Saving Throws */}
        {abilities.map(function (x) {
          return (
            <div
              id={`st_${x}`}
              className="check"
              style={{
                background: char.proficiencies.saving.includes(x)
                  ? "black"
                  : "none",
              }}
            ></div>
          );
        })}
        {abilitie_objects.map(function (x) {
          return (
            <div id={`st_${x.name}_val`} className="input saving">
              {char.proficiencies.saving.includes(x.name)
                ? char.pb + x.val
                : x.val}
            </div>
          );
        })}
        {/* Skills */}
        {skills.map(function (x) {
          let color = char.proficiencies.skills.includes(x.name)
            ? "black"
            : "none";
          let val = char.proficiencies.skills.includes(x.name)
            ? char.pb + x.val
            : x.val;
          return (
            <div>
              <div
                id={`check_${x.name}`}
                className="check"
                style={{ background: color }}
              ></div>
              <div id={`${x.name}`} className="input skill">
                {val}
              </div>
            </div>
          );
        })}
        <div id="other" className="list">
          <div className="row">
            <b>Armor:&nbsp;</b>
            {char.proficiencies.armor.length
              ? char.proficiencies.armor.map(function (x, i) {
                  return <div id={`armor_${i}`}>{x},&nbsp;</div>;
                })
              : "None"}
          </div>
          <div className="row">
            <b>Weapons:&nbsp;</b>
            {char.proficiencies.weapons.length
              ? char.proficiencies.weapons.map(function (x, i) {
                  return <div id={`weapons_${i}`}>{x},&nbsp;</div>;
                })
              : "None"}
          </div>
          <div className="row">
            <b>Tools:&nbsp;</b>
            {char.proficiencies.tools.length
              ? char.proficiencies.tools.map(function (x, i) {
                  return <div id={`tools_${i}`}>{x},&nbsp;</div>;
                })
              : "None"}
          </div>
          <div className="row">
            <b>Lang:&nbsp;</b>
            {char.proficiencies.languages.length
              ? char.proficiencies.languages.map(function (x, i) {
                  return <div id={`armor_${i}`}>{x},&nbsp;</div>;
                })
              : "None"}
          </div>
        </div>
        {/* Attacks */}
        <div id="attack_name_1" className="input start">
          Crossbow
        </div>
        <div id="attack_attack_1" className="input start">
          7
        </div>
        <div id="attack_damage_1" className="input start">
          1d6+5/piercing
        </div>
        <div id="attack_name_2" className="input start">
          Bayblade
        </div>
        <div id="attack_attack_2" className="input start">
          4
        </div>
        <div id="attack_damage_2" className="input start">
          1d8+{char.pb}/force
        </div>
        <div id="attack_name_3" className="input start">
          Thunderclap
        </div>
        <div id="attack_attack_3" className="input start">
          4
        </div>
        <div id="attack_damage_3" className="input start">
          1d6/thunder
        </div>
        <div id="attack_list" className="list">
          {char.spells.cantrips.length
            ? char.spells.cantrips.map(function (x, i) {
                return (
                  <div
                    id={`spell_${i}`}
                    className="click"
                    onClick={() => openbox(x.name, x.val)}
                  >
                    {x.name}
                  </div>
                );
              })
            : null}
          {char.spells.lv1.length
            ? char.spells.lv1.map(function (x, i) {
                return (
                  <div
                    id={`spell_${i}`}
                    className="click"
                    onClick={() => openbox(x.name, x.val)}
                  >
                    {x.name}
                  </div>
                );
              })
            : null}
        </div>
        {/* Equipment */}
        <div id="equipment" className="list">
          {char.equipment.length
            ? char.equipment.map(function (x) {
                return (
                  <div
                    id={`equipment_${x.name}`}
                    className="click"
                    onClick={() => openbox(x.name, x.val)}
                  >
                    {x.name}
                  </div>
                );
              })
            : "None"}
        </div>
        <div id="cp" className="input">
          {char.copper}
        </div>
        <div id="sp" className="input">
          {char.silver}
        </div>
        <div id="ep" className="input"></div>
        <div id="gp" className="input">
          {char.gold}
        </div>
        <div id="pp" className="input"></div>
        {/* Right side */}
        <div id="trait" className="input">
          spell slots
        </div>
        <div
          id="ideals"
          className="input click"
          onClick={() => openSpellbox("cantrips")}
        >
          Cantrips
        </div>
        <div
          id="bonds"
          className="input click"
          onClick={() => openSpellbox("spells")}
        >
          My Spells
        </div>
        <div
          id="flaws"
          className="input click"
          onClick={() => openbox("familiar", char.familiar)}
        >
          My Familiar
        </div>
        <div id="feats" className="list">
          {char.feat.length
            ? char.feat.map(function (x) {
                return (
                  <div
                    id={`feat_${x.name}`}
                    className="click"
                    onClick={() => openbox(x.name, x.val)}
                  >
                    {x.name}
                  </div>
                );
              })
            : "None"}
        </div>
      </div>
    </div>
  );
}

export default App;
