import { useState, useEffect } from "react"


function Keepme() {
    const [count,setCount] = useState(0)
    const addcount = () => {
        setCount(a => a + 1)
    }
    useEffect(() => {
      const localcount = localStorage.getItem(`count`)
      if (localcount !== null) setCount(JSON.parse(localcount))
    }, [])
    useEffect(() => {
      localStorage.setItem(`count`, JSON.stringify(count))
    },[count])
    return (
        <>
        <div>Score: {count}
        <button onClick={addcount}>+1</button>
        </div>
        
        
        </>
    )

}
export default Keepme