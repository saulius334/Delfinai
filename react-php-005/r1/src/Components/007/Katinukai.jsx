import { useEffect, useState } from "react"

function Katinukai() {
    const [sarasas, setSarasas] = useState([])
    const pridet = () => {
        setSarasas(a => [...a,[vardas,` `, storis]])
    }
    const [vardas, setVardas] = useState(``)
    const logname = (a) => {
        setVardas(a.target.value)
    }
    const [storis,setStoris] = useState(``)
    const logfat = (a) => {
        setStoris(a.target.value)
    }
    const submit = (evnt) => {
        evnt.preventDefault()
    }
    useEffect(() => {
        const localsarasas = localStorage.getItem(`katinukai`)
      if (localsarasas !== null) setSarasas(JSON.parse(localsarasas))
    }, [])
    useEffect(() => {
        localStorage.setItem(`katinukai`, JSON.stringify(sarasas))
      },[sarasas])

    return (
        <>
        <div style={{margin:`50px`}}>
        <form style={{display:`flex`,flexDirection:`column`}} onSubmit={submit}>
        <span style={{fontSize: `20px`}}>Cat name: </span><input type="text" value={vardas} onChange={logname}/>
        <span style={{fontSize: `20px`}}>Cat fat: </span><input type="number" value={storis} onChange={logfat}/>
        <span style={{fontSize: `20px`}}>Cat submit</span><button type="submit" onClick={pridet}>Log cat</button>
        </form>
        <span style={{fontSize: `20px`}}>Cat list: </span>
        {
            sarasas.sort((a,b) => b[2] - a[2]).map((a,i) => <div key={i}>{a}</div>)
        }
        </div>
        </>
    )
}
export default Katinukai