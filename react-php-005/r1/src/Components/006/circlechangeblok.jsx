import { useState } from "react"

function CircleBlox() {

    const [round, setRound] = useState(50)
    const changeRound = () => {
        setRound(a => a === 50 ? 0 : 50)
    }
    return (
        <>
    <div style={{width:`100px`, height:`100px`, backgroundColor: `white`, margin: `10px`, borderRadius: round }}></div>
    <button onClick={changeRound}>Change</button>
    </>
    )
}
export default CircleBlox