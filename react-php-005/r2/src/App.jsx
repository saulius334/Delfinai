import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import './bootstrap.css';
import AnimalsContext from './components/AnimalsOne';
import CreateD from './components/Create';
import List from './components/List';
import { Create, Read } from './functions/localstorage'
const keyLoca = `zoo`;

  const animalsTypes = [
    {id:1, type: `antis`},
    {id:2, type: `avis`},
    {id:3, type: `antilope`},
  ]

function App() {
  
  const [lastUpdate, setLastUpdate] = useState(Date.now())

  const [createData, setCreateData] = useState(null)
  const [animals, setanimals] = useState(null)
useEffect(() => {
  setanimals(Read(keyLoca))
},[lastUpdate])

  useEffect(() => {
    if (createData === null) {
      return
    }
    Create(keyLoca, createData)
    setLastUpdate(Date.now())
    console.log(`time is: ` + Date.now());
  },[createData])

  return (
    <>
    <AnimalsContext.Provider value={{
      animalsTypes,
      setCreateData,
      animals
    }}>
    <div className="container">

<div className="row">
  <div className="col-4">
    <CreateD/>
  </div>

  <div className="col-8">
   <List/>
  </div>
</div>
</div>
</AnimalsContext.Provider>
    </>
  );
}

export default App;
