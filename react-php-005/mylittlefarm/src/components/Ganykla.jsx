import { useState } from "react"
import Karvesmaker from "./Karvesmaker"
import Avysmaker from "./Avysmaker"

function Ganykla() {

    const [avys, setAvys] = useState([])
    const [karves,setKarves] = useState([])
    const iganykla = () => {
        setKarves(a => {
            a = [];
             return [...a,<Karvesmaker onClick={switcheroo}/>]
        })
        setAvys(a => {
            a = [];
             return [...a,<Avysmaker/>]
        })
    }
    const switcheroo = () => {
        
    }

    return (
        <>
        <fieldset className="ganyklafield">
            <legend>Ganykla</legend>
        <button className="ganyklabtn" onClick={iganykla}>I GANYKLA</button>
        <div className="Ganykla">
        <div className="Karves">
        {
            avys.map(a => a)
        }
        </div>
        <div className="Avys">
        {
            karves.map(a => a)
        }
        </div>
        </div>
        </fieldset>
        </>
    )
}

export default Ganykla