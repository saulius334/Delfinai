import './App.scss';
import './bootstrap.css';
import AnimalsContext from './components/AnimalsOne';
import Create from './components/Create';

  const animalsTypes = [
    {id:1, type: `antis`},
    {id:2, type: `avis`},
    {id:3, type: `antilope`},
  ]

function App() {
  return (
    <>
    <AnimalsContext.Provider value={{
      animalsTypes
    }}>
    <div className="container">

<div className="row">
  <div className="col-4">
    <Create/>
  </div>

  <div className="col-8">
    One of three columns
  </div>
</div>
</div>
</AnimalsContext.Provider>
    </>
  );
}

export default App;
