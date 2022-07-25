import './App.css';
import { useState, useEffect } from "react"
import randColor from './functions/randColor';
import Kv from './Components/007/Kv';
import Count from './Components/007/Count';
import ForeverYoung from './Components/007/Amzinasskaitiklis';
import Kvadrat from './Components/007/kvadratnr1';



function App() {
    const [kv, setKv] = useState([])
    const kvPressed = () => {
        setKv(k => [...k, randColor()])
        console.log(`jaja`);
    }

    useEffect(() => {
        if(kv.length === 0) {return;}
        console.log(`jajajajajaja`);
    }, [kv])

  return (
    <div className="App">
      <header className="App-header">
      <h1 onClick={kvPressed}>State</h1>

<div className='kv-bin'>
 {
     kv.map((c,i) => <Kv key={i} c={c}></Kv>)
 }
</div>
 <Count start={120}></Count>
 <ForeverYoung></ForeverYoung>
 <Kvadrat></Kvadrat>
      </header>
    </div>
  );
}

export default App;
