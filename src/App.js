import artificer from "./characters/artificer";
import hugo from "./characters/hugo_von_sonson";
// import dedd from "./characters/druid_spored";
import { useState } from "react";
import Popup from "./popup";
import Ability from "./ability";
import Inputs from "./inputs";

function App() {
  // let char = dedd
  const [char, setchar] = useState(hugo);
  // const [type, setType] = useState("spells");
  const [isOpen, setIsOpen] = useState(false);
  const [pop, setpop] = useState(null);
  // const [hp, setHp] = useState(char.hp);
  // const [tempHp, setTempHp] = useState(0);
  const [boxContent, setBoxContent] = useState({ title: "Init", text: "None" });
  // const [spellSlots, setSpellSlots] = useState(char.spells.slots);

  // function changeChar(val) {
  //   setchar(val);
  //   setHp(val.hp);
  //   setSpellSlots(val.spells.slots);
  // }

  function openbox(title, val) {
    if (title === "familiar") {
      setBoxContent({ title: val.name, text: "" });
      // setfamiliar(val);
    } else {
      setBoxContent({ title: title, text: val });
      // setfamiliar(null)
    }
    setIsOpen(!isOpen);
    // setSpellOpen(false);
  }

  function ll() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.pageXOffset);
    console.log(window.pageYOffset);
  }

  function close() {
    setIsOpen(false)
    setpop(null)
  }

  function input(type, val) {
    setIsOpen(true)
    setpop(val)
    console.log(val)
  }

  return (
    <div className="container">
      {isOpen && <Popup char={char} val={pop} open={close} />}
      <Ability char={char} />
      <div className="button-container">
        <button className="click" onClick={() => ll()}>
          Log
        </button>
        <button className="click" onClick={() => setchar(hugo)}>
          Hugo Sonson
        </button>
        <button className="click" onClick={() => setchar(artificer)}>
          Axel Havoc
        </button>
        <button className="click" onClick={() => setchar(artificer)}>
          Dedd Valking
        </button>
        <button className="click" onClick={() => setchar(artificer)}>
          Aumbla
        </button>
      </div>
      <img
        src="./5E_CharacterSheet_Fillable_page-0001.jpg"
        alt="gg"
        width="850px"
        height="1100px"
      />
      <Inputs char={char} click={(type, val) => input(type, val)} />
    </div>
  );
}

export default App;