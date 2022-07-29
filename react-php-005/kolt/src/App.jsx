import { useState } from 'react';
import './App.css';
import KoltContext from './components/KoltContext';
import Paspirdukas from './components/Paspirdukas';

function App() {
  

  const [paspirdukuSarasas, setPaspirdukuSarasas] = useState([])
  const [nRida, setnRida] = useState(``)
  const irasytarida = (e) => {
    setnRida(e.target.value)
  }
  const pridetiPaspirduka = () => {
    setPaspirdukuSarasas(a => [...a, <Paspirdukas irasytarida={nRida}/>])
  }



  return (
    <KoltContext.Provider value={{

    }}>
    <div className="App">
      <header className="App-header">
        <fieldset className='Pagrindinis'>
          <legend>Kolt paspituku nuoma</legend>
          <div className="container">
            <fieldset>
              <legend>Uzregistruoti nauja</legend>
              <label>Paspirtuko rida:</label>
              <input type="text" onChange={irasytarida}></input>
          <button className='btn' onClick={pridetiPaspirduka}>Atsivesti nauja paspirduka</button>
          </fieldset>
          <fieldset style={{width:`70%`}}>
            <legend>Statistika</legend>
            <p>Is viso paspirtuku:</p>
            {/* {paspirtukuKiekis} */}
            <p>Bendrai nuvaziuoti km:</p>
            {/* {nuvaziuotaBendraiKM} */}
          </fieldset>
          </div>
          <div className="container PaspirdukuSarasas">
            <div className='ieskotiContainer'>
            <p className='ieskoti'>Ieskoti pagal koda:</p>
            <input type="text"></input>
            </div>
          {
            paspirdukuSarasas.map((a,i) =>
            <div className='paspirdukas' key={i}>
              <p>{a.isBusy}</p>
              <div className='updateButtonsDiv'>
              <button className='btn update'>Trinti</button>
              <button className='btn update'>Redaguoti</button>
              </div>
              </div>)
          }
          </div>


        </fieldset>
      </header>
    </div>
    </KoltContext.Provider>
  );
}

export default App;
