import { useState, useEffect } from "react";

function Popup({ char, val, open }) {
  console.log("dddddd");
  console.log(val);
  const [zoom, setzoom] = useState('');
  // const [spellOpen, setSpellOpen] = useState(false);
  // const [boxContent, setBoxContent] = useState({ title: "Init", text: "None" });
  // const all_spells = char.spells.cantrips.concat(
  //   char.spells.lv1,
  //   char.spells.lv2,
  //   char.spells.lv3,
  //   char.spells.lv4,
  //   char.spells.lv5,
  //   char.spells.lv6,
  //   char.spells.lv7,
  //   char.spells.lv8,
  //   char.spells.lv9,
  //   char.spells.lv10,
  // );
  // const [spellList, setSpellList] = useState([]);
  // const [spellTitle, setSpellTitle] = useState("");
  // const [spell, setSpell] = useState(null);
  // const [familiar, setfamiliar] = useState(null);

  useEffect(() => {
    console.log('dqwdqdqwdqwd')
    document.getElementsByTagName('body')[0].scrollTop = 0
    document.getElementsByTagName('body')[0].scrollLeft = 0
    document.getElementById('ggggg').scrollTop = 0
    document.getElementById('ggggg').scrollLeft = 0
    document.getElementById('popup').scrollTop = 0
    document.getElementById('popup').scrollLeft = 0
    let vp = document.querySelector('meta[name="viewport"]')
    if (vp) {
      console.log(vp)
      vp.content = "initial-scale=1"
      vp.content = "width=device-width"
    }
  }, [])

  // function openbox(title, val) {
  //   if (title === "familiar") {
  //     setBoxContent({ title: val.name, text: "" });
  //     setfamiliar(val);
  //   } else {
  //     setBoxContent({ title: title, text: val });
  //     setfamiliar(null);
  //   }
  //   setSpellOpen(false);
  // }

  // function openSpellbox(val) {
  //   setSpellList(null);
  //   if (val === "cantrips") {
  //     setSpellTitle("Cantrips");
  //     setSpellList(char.spells.cantrips);
  //   } else if (val === "my") {
  //     setSpellTitle("My Spells");
  //     setSpellList([char.spells.lv1[0]]);
  //   } else {
  //     setSpellTitle("All Spells");
  //     setSpellList(all_spells);
  //   }
  //   setSpellOpen(!spellOpen);
  // }

  // function backToSpells() {
  //   setSpell(null);
  // }

  // function selectSpell(val) {
  //   let s = all_spells.find(({ name }) => name === val);
  //   let obj = {
  //     name: s.name,
  //     casting_time: s.casting_time,
  //     range: s.range,
  //     components: s.components,
  //     duration: s.duration,
  //     val: s.val,
  //     levels: s.levels ? s.levels : null,
  //   };
  //   setSpell(obj);
  // }

  function zz() {
    let z = document.getElementsByTagName('body')[0]

    console.log(window.document.body)
    // console.log(z.style.zoom)
    setzoom(z.style.zoom)
  }

  return (
    <div className="container" id="ggggg">
      <div id="popup" className="popup">
        <button onClick={open}>x</button>
        <button onClick={zz}>Z</button>
        <div>
          <p>zoom is: {zoom}</p>
        </div>
      </div>
      {/* {isOpen === "gg" && (
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
              <div>
                {boxContent.text ? (
                  <div>{boxContent.text}</div>
                ) : (
                  <div>No Description</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {spellOpen === "gg" && (
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
                    <div>{spell.val}</div>
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
                <div className="spell-list">
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
      )} */}
    </div>
  );
}

export default Popup;