import { useState } from "react"
// import { useEffect } from "react"

function Keepme() {
    const [count,setCount] = useState(0)
    const addcount = () => {
        setCount(a => a + 1)
    }
    // useEffect(() => {
    //     localStorage.setCount('count', JSON.stringify(count));
    //   }, [count]);

    //   useEffect(() => {
    //     const count = JSON.parse(localStorage.getItem('count'));
    //     if (count) {
    //      setCount(count);
    //     }
    //   }, []);
    return (
        <>
        <div>Score: {count}
        <button onClick={addcount}>+1</button>
        </div>
        
        
        </>
    )

}
export default Keepme