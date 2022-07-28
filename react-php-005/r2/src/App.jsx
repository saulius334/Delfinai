import { useEffect } from 'react';
import { useState } from 'react';
import './bootstrap.css';
import './App.scss';
import AnimalsContext from './components/AnimalsOne';
import CreateD from './components/Create';
import Edit from './components/Edit';
import List from './components/List';
import { Create, Destroy, Read, Update } from './functions/localstorage'
const keyLoca = `zoo`;

  const animalsTypes = [
    {id:1, type: `antis`},
    {id:2, type: `avis`},
    {id:3, type: `antilope`},
  ]

function App() {
  
  const [lastUpdate, setLastUpdate] = useState(Date.now())
  const [modalData, setModalData] = useState(null)
  const [createData, setCreateData] = useState(null)
  const [deleteData, setDeleteData] = useState(null)
  const [editData, setEditData] = useState(null)
  const [animals, setanimals] = useState(null)

useEffect(() => {
  setanimals(Read(keyLoca).sort((a,b) => a.id - b.id))
},[lastUpdate])

  useEffect(() => {
    if (createData === null) {
      return
    }
    Create(keyLoca, createData)
    setLastUpdate(Date.now())
  },[createData])

  useEffect(() => {
    if (deleteData === null) {
      return
    }
    Destroy(keyLoca, deleteData)
    setLastUpdate(Date.now())
  },[deleteData])

  useEffect(() => {
    if (editData === null) {
      return
    }
    Update(keyLoca, editData, editData.id)
    setLastUpdate(Date.now())
  },[editData])

  return (
    <>
    <AnimalsContext.Provider value={{
      animalsTypes,
      setCreateData,
      animals,
      setDeleteData,
      modalData,
      setModalData,
      setEditData,
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
<Edit></Edit>
</AnimalsContext.Provider>
    </>
  );
}

export default App;
