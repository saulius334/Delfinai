import './App.css';
import { useState } from "react"
import Fun from './Components/006/fun';
import Sad from './Components/006/sad';
import randColor from './functions/randColor';
import CircleBlox from './Components/006/circlechangeblok';
import CircleBlox2 from './Components/006/circlechangeblox2';
import Score from './Components/006/score';
import Kvadratukai from './Components/006/kvadratukai';
import Addblock from './Components/006/addblock';
import Medziai from './Components/006/medziai';


function App() {
    const [count, setcount] = useState(0)
    const [kv, setKv] = useState([])
  return (
    <div className="App">
      <header className="App-header">
       <Fun spalva = "blue" setcount={setcount}></Fun>
       <Sad count={count}></Sad>
       <h1 onClick={() => setKv(k => [...k, randColor()])}>State</h1>

       <div className='kv-bin'>
        {
            kv.map((c,i) => <div className='kv' style={{backgroundColor: c+`69`, borderColor: c}} key={i}></div>)
        }
       </div>
        <CircleBlox></CircleBlox>
        <CircleBlox2></CircleBlox2>
        <Score></Score>
        <Kvadratukai></Kvadratukai>
        <Addblock></Addblock>
        <Medziai></Medziai>
      </header>
    </div>
  );
}

export default App;
