import { useState } from "react"
import Random from "../functions/random"
import RandomSerialnm from "./RandomSerialnm"

function Ganykla() {
    const stylekarve = {
        width: `80px`,
        height: `80px`,
        backgroundColor:`Brown`,
        cursor: `pointer`,
        margin: `10px`,
    }
    const styleavis = {
        width: `80px`,
        height: `80px`,
        backgroundColor:`Brown`,
        cursor: `pointer`,
        margin: `10px`,
    }
    const pstyle = {
        fontSize: `16px`
    }
    const [avys, setAvys] = useState([])
    const [karves,setKarves] = useState([])
    const iganykla = () => {
        setKarves(a => {
            a = [];
             return [...a,...Array(Random(5,20))]
        })
        setAvys(a => {
            a = [];
             return [...a,...Array(Random(5,20))]
        })
    }
    const switcheroo = () => {
        console.log(`labas`);
    }
    return (
        <>
        <fieldset className="ganyklafield">
            <legend>Ganykla</legend>
        <button className="ganyklabtn" onClick={iganykla}>I GANYKLA</button>
        <div className="Ganykla">
        <div className="Avys">
        {
            avys.map((a,i) => <div onClick={switcheroo} style={styleavis} key={i}><p style={pstyle}>Avis A{RandomSerialnm()}</p></div>)
        }
        </div>
        <div className="Karves">
        {
            karves.map((a,i) => <div onClick={switcheroo} style={stylekarve} key={i}><p style={pstyle}>Karve K{RandomSerialnm()}</p></div>)
        }
        </div>
        </div>
        </fieldset>
        </>
    )
}

export default Ganykla