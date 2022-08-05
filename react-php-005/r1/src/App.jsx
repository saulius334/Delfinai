import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data));
   }, [])
  return (
    render(){
      let langs = ["Ruby","ES6","Scala"]
      return (<div>
      {langs.map(it => <p>{it}</p>)}
      </div>)
      }
    <>
    <h1>API</h1>
<ul>
    {
        users.map(a => <li key={a.id}>{a.name}-{a.address.city}</li>)
    }
</ul>
    </>
  );
}

export default App;