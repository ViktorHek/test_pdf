import artificer from "./characters/artificer";

function App() {

  return (
    <div className="container">
      <div className="button-container">
        <button>hej</button>
        <button>tjo</button>
      </div>
      <img src="./5E_CharacterSheet_Fillable_page-0001.jpg" alt="gg" width="850px" height="1100px" />
      <div className="inputs-container">
        <div className="input center name">{artificer.name}</div>
        <div className="input start" style={{top: 69, left: 375, width: 155, height: 20}}>{artificer.class} {artificer.subclass}</div>
        
        <div className="input start" style={{top: 69, left: 532, width: 133, height: 20}}>{artificer.background}</div>
        <div className="input start" style={{top: 69, left: 667, width: 123, height: 20}}>Viktor</div>

        <div className="input start" style={{top: 105, left: 375, width: 155, height: 20}}>{artificer.race}</div>
        <div className="input start" style={{top: 105, left: 532, width: 133, height: 20}}>Lawful Good</div>
        <div className="input start" style={{top: 105, left: 667, width: 123, height: 20}}>0</div>
      </div>
    </div>
  );
}

export default App;
