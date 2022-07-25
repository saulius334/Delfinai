import { useState } from "react"
import CounterSimple from "./countersimple"
function Blackbox() {
const [juodas,setjuodas] = useState([])
const prideti = () => {
    setjuodas(s => [...s,<CounterSimple/>])
}

    return (
        <>


        
        <button onClick={prideti}>Prideti</button>
        <div style={{display:`flex`,flexWrap:`wrap`, justifyContent:`center`}}>
        {   
            juodas.map((a,i) => <div style={{width:`100px`, height:`100px`,backgroundColor:`black`,}} key={i}>
                {a}
            </div>)
        }
        </div>
        </>
    )
}

export default Blackbox