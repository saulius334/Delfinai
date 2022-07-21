import './App.css';
import Kn from './Components/005/kn';
import Kosmosas from './Components/005/Kosmosas';
import Labaszuiki from './Components/005/labaszuiki';
import Properis from './Components/005/Properis';
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
        <Properis pirmas = "Laba diena"> </Properis>
        <ZebrasBebras rand = {random(0,2)}></ZebrasBebras>
        <Duprops vienas = "as esu" du = "Maladec"></Duprops>
        <Trysprops vienas= "Saulius" du= "Jonas" trys={{color: "cyan"}}></Trysprops>
       { // 1
        dogs.map((dogs,i) => <Dogskvadrat key={i} name={dogs}></Dogskvadrat>)
       }
      { // 2
        [...dogs].sort((a,b) => b.length - a.length).map((dogs,i) => <Dogscircle key={i} name={dogs} count={i}></Dogscircle>)
      }
      { // 3
        dogs.map((dogs,i) => <Kasantras key={i} name={dogs} count={i}></Kasantras>)  
      }
      { // 4
        dogs.map((dogs,i) => <Didzioji key={i} name={dogs}></Didzioji>)
      }
      { // 5
        dogs.map((dogs,i,t) => <Spalvotisunys key={i} name={dogs} array={t}></Spalvotisunys>)
      }
      </header>
    </div>
  );
}

export default App;
