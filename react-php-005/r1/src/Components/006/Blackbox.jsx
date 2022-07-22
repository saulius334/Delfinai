import { useState } from "react"

function Blackbox() {
const [juodas,setjuodas] = useState([])
const prideti = () => {
    setjuodas(s => [...s,`count: `])
}
const [count, addCount] = useState(0)
const plius = () => {
    addCount(a => a + 1)
}

    return (
        <>


        
        <button onClick={prideti}>Prideti</button>
        <div style={{display:`flex`,flexWrap:`wrap`, justifyContent:`center`}}>
        {
            juodas.map((a,i) => <div style={{width:`100px`, height:`100px`,backgroundColor:`black`,}} key={i}>
                {a} {count} <button onClick={plius}>+</button>
            </div>)
        }
        </div>
        </>
    )
}

export default Blackbox