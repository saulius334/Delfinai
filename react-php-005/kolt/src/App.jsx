import { useState } from 'react';
import './App.css';

function App() {

  const [paspirdukuSarasas, setPaspirdukuSarasas] = useState([])
  const pridetiPaspirduka = () => {
    setPaspirdukuSarasas(a => [...a, `a`])
  }



  return (
    <div className="App">
      <header className="App-header">
        <fieldset className='Pagrindinis'>
          <legend>Kolt paspituku nuoma</legend>
          <div className="container">
          <button className='btn' onClick={pridetiPaspirduka}>Atsivesti nauja paspirduka</button>
          <fieldset style={{width:`70%`}}>
            <legend>Statistika</legend>
            <p>Is viso paspirtuku:</p>
            {/* {paspirtukuKiekis} */}
            <p>Bendrai nuvaziuoti km:</p>
            {/* {nuvaziuotaKM} */}
          </fieldset>
          </div>
          <div className="container PaspirdukuSarasas">
            <div className='ieskotiContainer'>
            <p className='ieskoti'>Ieskoti pagal koda:</p>
            <input type="text"></input>
            </div>
          {
            paspirdukuSarasas.map((a,i) => <div className='paspirdukas' key={i}>{a}</div>)
          }
          </div>


        </fieldset>
      </header>
    </div>
  );
}

export default App;
