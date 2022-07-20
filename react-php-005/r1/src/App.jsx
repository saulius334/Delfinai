import './App.css';
import Kosmosas from './Components/005/Kosmosas';

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
          masyvas.map((a,i) => <h2 key={i}>{a}</h2>)
        }
      </header>
    </div>
  );
}

export default App;
