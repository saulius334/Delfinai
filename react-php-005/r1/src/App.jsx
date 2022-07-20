import './App.css';
import Kn from './Components/005/kn';
import Kosmosas from './Components/005/Kosmosas';
import Labaszuiki from './Components/005/labaszuiki';
import Props from './Components/005/Properis';
import ZebrasBebras from './Components/005/zebras bebras';
import random from "../src/functions/random"
import Duprops from './Components/005/DuProps';
import Trysprops from './Components/005/TrysProps';

const yel = "yellow"
const props = {color: yel, backgroundColor: `red`}
let x = `160px`

const masyvas = [`Pilkis`, `Murkis`, `Steve`]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Kosmosas spalva="pink" krastas = {x}></Kosmosas>
        <Kosmosas spalva="yellow" krastas = {`100px`} props = {props}></Kosmosas>
        {
          masyvas.map((a,i) => <Kn key={i} name={a}></Kn>)
        }
        <Labaszuiki></Labaszuiki>
        <Props props = "Laba diena"> </Props>
        <ZebrasBebras props = {random(0,2)}></ZebrasBebras>
        <Duprops props1 = "as esu" props2 = "Maladec"></Duprops>
        <Trysprops props1= "Saulius" props2= "Jonas" props3={{color: "cyan"}}></Trysprops>
      </header>
    </div>
  );
}

export default App;
