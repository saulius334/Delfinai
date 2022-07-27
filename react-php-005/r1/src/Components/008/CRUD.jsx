import { useEffect } from "react"
import { useState } from "react"

function CRUD() {

    const [sarasas, setSarasas] = useState([])
    const [objsarasas, setObjsarasas] = useState([])
    const [vardas, setVardas] = useState(``)
    const [tipas, setTipas] = useState(`Avis`)
    const [svoris, setSvoris] = useState(``)

    const vardaschange = (e) => {
        setVardas(e.target.value)
    }
    const changeType = (e) => {
        setTipas(e.target.value)
    }
    const svorischange = (e) => {
        setSvoris(e.target.value)
    }
    const prideti = () => {
        setSarasas(a => [...a, [`vardas: `, vardas,` `, `tipas: `, tipas,` `, `svoris: `,svoris ]])
        setObjsarasas(a => [...a, {vardas: vardas, tipas: tipas, svoris: svoris }])
    }
    useEffect(() => {
        const localsarasas = localStorage.getItem(`gyvuliai`)
        if (localsarasas !== null) setObjsarasas(JSON.parse(localsarasas))
    }, [])
    useEffect(() => {
        localStorage.setItem(`gyvuliai`, JSON.stringify(objsarasas))
      },[objsarasas])



    return (
        <>
        <fieldset>
        <legend>CRUD</legend>
        <div style={{display:`flex`, gap:`20px`}}>
            <label style={{fontSize:`20px`}}>Gyvulio vardas:</label>
            <input type="text" value={vardas} onChange={vardaschange} required></input>
        <label style={{fontSize:`20px`}}>Gyvulys:</label>
        <select value={tipas} onChange={changeType}>
            <option value="Avis">Avis</option>
            <option value="Antis">Antis</option>
            <option value="Antilope">Antilope</option>
        </select>
        <label htmlFor="svoris" style={{fontSize:`20px`}}>Svoris: </label>
        <input id="svoris" type="Number" value={svoris} onChange={svorischange} required></input>
        </div>
        <button onClick={prideti}>Prideti gyvuli</button>
        </fieldset>
        <fieldset>
            <legend>Gyvuliu sarasas</legend>
            {
                sarasas.map((a,i) => <div style={{display:`flex`,gap:`30px`}} key={i}>{a}</div>)
            }
        </fieldset>
        <fieldset>
            <legend>Redaguoti gyvuli</legend>
            <label>Pasirinkti gyvuli</label>
            <select>
               
            </select>
        </fieldset>
        </>
    )
}
export default CRUD