import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [user, setuser] = useState(``)
const pasikeitimas= (a)=> {
  setuser(a.target.value)
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontSize: "100px" ,color:"purple", letterSpacing: "20px"}}>
          Iam {user}
        </p>
        <input type="text" onChange={pasikeitimas}></input>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
