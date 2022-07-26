import { useState } from "react"

function Santykis() {
    const santykis = 2
    const [first, setFirst] = useState(100)
    const changefirst = (a) => {
        setFirst(a.target.value)
        setSecond(a.target.value / 2)
    }
    const [second,setSecond] = useState(50)
    const changesecond = (a) => {
        setSecond(a.target.value)
        setFirst(a.target.value * 2)
    }
    return (
        <>
        <div style={{display:`flex`, gap:`10px`}}>
        <input type="number" value={first} onChange={changefirst}/>
        <p>santykis: {santykis}</p>
        <input type="number" value={second} onChange={changesecond}/>
        </div>
        </>
    )
}

export default Santykis