function Ability({char}) {
  const abilities = ["str", "dex", "con", "int", "wis", "cha"];
  const str_mod = Math.floor((char.str - 10) / 2);
  const dex_mod = Math.floor((char.dex - 10) / 2);
  const con_mod = Math.floor((char.con - 10) / 2);
  const int_mod = Math.floor((char.int - 10) / 2);
  const wis_mod = Math.floor((char.wis - 10) / 2);
  const cha_mod = Math.floor((char.cha - 10) / 2);

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

  return (
    <div style={{position: 'absolute', top: 50, left: 0}}>
      <div id="ac" className="input big">
        {10 + dex_mod + char.armor}
      </div>

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

      {skills.map(function (x) {
        let color = char.proficiencies.skills.includes(x.name)
          ? "black"
          : "none";
        let val = char.proficiencies.skills.includes(x.name)
          ? char.pb + x.val
          : x.val;
        val += char.proficiencies.expertise.includes(x.name) ? char.pb : 0;
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
    </div>
  );
}

export default Ability;