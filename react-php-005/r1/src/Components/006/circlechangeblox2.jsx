import { useState } from "react"
import random from "../../functions/random"
function CircleBlox2() {
    const [num, numrandom] = useState(999)
    const changeNum = () => {
        numrandom(a => a === 999 ? random(5,25) : random(5,25))
    }
    const [round, setRound] = useState(50)
    const changeRound = () => {
        setRound(a => a === 50 ? 0 : 50)
    }
    const style = {
        width:`100px`,
        height:`100px`,
        backgroundColor: `white`,
        color: `black`,
        margin: `10px`,
        borderRadius: round ,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
    }
    return (
        <>
    <div style={style}>{num}</div>
    <button onClick={changeRound}>Change</button>
    <button onClick={changeNum}>Random</button>
    </>
    )
}
export default CircleBlox2