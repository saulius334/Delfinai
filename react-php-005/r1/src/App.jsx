import './App.css';
import Kn from './Components/005/kn';
import Kosmosas from './Components/005/Kosmosas';
import Labaszuiki from './Components/005/labaszuiki';
import Props from './Components/005/Properis';
import ZebrasBebras from './Components/005/zebras bebras';
import random from "../src/functions/random"
import Duprops from './Components/005/DuProps';
import Trysprops from './Components/005/TrysProps';
import Dogskvadrat from './Components/005/dogskvadrat';
import Dogscircle from './Components/005/dogcircle';
import Kasantras from './Components/005/dogsporiniai';
import Didzioji from './Components/005/didzioji';
import Spalvotisunys from './Components/005/spalvotisunys';

const yel = "yellow"
const props = {color: yel, backgroundColor: `red`}
let x = `160px`

const masyvas = [`Pilkis`, `Murkis`, `Steve`]
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis']


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
       {
        dogs.map((a,i) => <Dogskvadrat key={i} props={a}></Dogskvadrat>)
       }
      {
        [...dogs].sort((a,b) => b.length - a.length).map((a,i) => <Dogscircle key={i} props={a} count={i}></Dogscircle>)
      }
      {
        dogs.map((a,i) => <Kasantras key={i} props={a} count={i}></Kasantras>)  
      }
      {
        dogs.map((a,i) => <Didzioji key={i} props={a}></Didzioji>)
      }
      {
        dogs.map((dogs,i,t) => <Spalvotisunys key={i} name={dogs} array={t}></Spalvotisunys>)
      }
      </header>
    </div>
  );
}

export default App;
