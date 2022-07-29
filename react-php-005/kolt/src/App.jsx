import { useEffect, useState } from "react";
import "./App.css";
import KoltContext from "./components/KoltContext";
import { Create, Read, Update, Destroy } from "./functions/localstorage";
import { useContext } from "react";
import Paspirdukas from "./components/Paspirdukas";
import RndSerial from "./functions/Rndserial";
// import KoltContext from "./components/KoltContext"
const key = `KOLTAS`;

// function Paspirdukas() {
//   const { nRida } = useContext(KoltContext)
//   console.log({Serialnr: RndSerial(), isBusy: false, Rida: parseFloat(nRida)})
//   return {Serialnr: RndSerial(), isBusy: false, Rida: parseFloat(nRida)}

// }

function App() {
  const [paspirdukuSarasas, setPaspirdukuSarasas] = useState(null);
  const [nRida, setnRida] = useState(0);
  const irasytarida = (e) => {
    setnRida(e.target.value);
  };
  const pridetiPaspirduka = () => {

    setPaspirdukuSarasas(a => [...a,{paspirtukas: `geras`}])
    Create(key, {paspirtukas: `geras`})
  };
  useEffect(() => {
  setPaspirdukuSarasas(Read(key))
  }, []);

  // useEffect(() => {
  //   console.log(paspirdukuSarasas)
  //   if (paspirdukuSarasas === null) {
  //     return;
  //   }
  //   localStorage.setItem(key, JSON.stringify(paspirdukuSarasas));
  // }, [paspirdukuSarasas]);

  return (
    <KoltContext.Provider
      value={{
        nRida,
      }}
    >
      <div className="App">
        <header className="App-header">
          <fieldset className="Pagrindinis">
            <legend>Kolt paspituku nuoma</legend>

            <div className="container">
              <fieldset>
                <legend>Uzregistruoti nauja</legend>
                <label>Paspirtuko rida:</label>
                <input type="text" onChange={irasytarida} value={nRida}></input>
                <button className="btn" onClick={pridetiPaspirduka}>
                  Atsivesti nauja paspirduka
                </button>
              </fieldset>
              <fieldset style={{ width: `70%` }}>
                <legend>Statistika</legend>
                <p>Is viso paspirtuku:</p>
                {/* {paspirtukuKiekis} */}
                <p>Bendrai nuvaziuoti km:</p>
                {/* {nuvaziuotaBendraiKM} */}
              </fieldset>
            </div>
            <div className="container PaspirdukuSarasas">
              <div className="ieskotiContainer">
                <p className="ieskoti">Ieskoti pagal koda:</p>
                <input type="text"></input>
              </div>
              {console.log(paspirdukuSarasas)}
              {paspirdukuSarasas?.map((a, i) => (
                <div className="paspirdukas" key={i}>
                  {/* <Paspirdukas /> */}sffsf
                  <div className="updateButtonsDiv">
                    <button className="btn update">Trinti</button>
                    <button className="btn update">Redaguoti</button>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
        </header>
      </div>
    </KoltContext.Provider>
  );
}

export default App;
