import { useState } from "react"

function Addblock() {
const [block, setblock] = useState([])
const addred = () => {
    setblock(b => [...b, `red`])
}
const addblue = () => {
    setblock(b => [...b, `blue`])
}
const reset = () => {
    setblock(b => [])
}


    return (
        <>
        <button onClick={addred}>Add red</button>
        <button onClick={addblue}>Add blue</button>
        <button onClick={reset}>Reset</button>
        <div style={{display: `flex`, flexWrap:`wrap`}}>
        {
        block.map((c,i) => <div style={{backgroundColor: c, margin: `10px`, width: `100px`, height: `100px`, border: `solid white 1px`,}} key={i}></div>)
        }
        </div>
        </>
    )

}
export default Addblock