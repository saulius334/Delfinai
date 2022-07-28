import { useState } from "react"
import Random from "../functions/random"
import RandomSerialnm from "./RandomSerialnm"

function Ganykla() {
    const [avys, setAvys] = useState([])
    const [karves,setKarves] = useState([])
    const iganykla = () => {
        setAvys(a => {
        a = []
           return [...a, ...Array(Random(5,20))].map(el=> RandomSerialnm(`A`))
        })
        setKarves(a => {
            a = [];
            return [...a, ...Array(Random(5,20))].map(el=> RandomSerialnm(`K`))
        })
    }
    const switcherooAvis = (a) => {
        console.log(a);
        setAvys(avys.filter(b => b !== a))
        setKarves(b => [...b, a])
    }
    const switcherooKarve = (a) => {
        setKarves(karves.filter(b => b !== a))
        setAvys(b => [...b, a])
    }
    return (
        <>
        <fieldset className="ganyklafield">
            <legend>Ganykla</legend>
        <button className="ganyklabtn" onClick={iganykla}>I GANYKLA</button>
        <div className="Ganykla">
        <div className="Avys">
        {
            avys.map((a,i) => <div className={a.charAt(0) === `A` ? `styleavis` : `stylekarve`} onClick={()=>switcherooAvis(a)} key={i}><p className="pstyle">{a}</p></div>)
        }
        </div>
        <div className="Karves">
        {
            karves.map((a,i) => <div className={a.charAt(0) === `A` ? `styleavis` : `stylekarve`} onClick={()=>switcherooKarve(a)} key={i}><p className="pstyle">{a}</p></div>)
        }
        </div>
        </div>
        </fieldset>
        </>
    )
}

export default Ganykla