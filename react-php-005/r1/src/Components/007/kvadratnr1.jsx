import { useState } from "react"
import Random from "../../functions/random"
function Kvadrat() {

    const style = {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        width: `100px`,
        height: `100px`,
        backgroundColor: `red`,
    }

    const [blx,setblx] = useState([])
    const create = () => {
        setblx(a => [...a, Random(100,200)])
    }

    return (
        <>
    <input style={{textAlign:`center`}} type="text"></input>
    <button type="submit" onClick={create}>Create this much blocks</button>
    {
        blx.map((a,i) => <div style={style} key={i}>{a}</div>)
    }
    </>
    )
}

export default Kvadrat