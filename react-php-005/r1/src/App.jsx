import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import M1 from './Components/009/M1';
import ContextOne from './Contexts/ContextOne';




function App() {
   
    const good = useRef()
    

    const [count,setCount] = useState(0)
    const bla = useRef(null)
    const prideti = () => {
        setCount(a => a + 1)
        console.log(bla);
        bla.current++
        const my = good.current
        console.log(my);
    }
  return (
    <ContextOne.Provider value={{
        pirmas: `Valio`,
        spalva: `pink`
    }}>
    <div className="App">
        <header className="App-header">
        <h1>useContext useRef</h1>
    <M1 kas={5}></M1>
    {count}
    <button ref={good} onClick={prideti}>+1</button>
        </header>
    </div>
    </ContextOne.Provider>
  );
}

export default App;