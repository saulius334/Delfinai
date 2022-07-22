import { useState } from "react"

function Kvadratukai() {
const [kvadrat, setKvadrat] = useState([])
const addOne = () => {
    setKvadrat(k => [...k, `white`])
}



    return (
        <>
        <button onClick={addOne}>Add</button>
        <div style={{display: `flex`, flexWrap:`wrap`}}>
        {
        kvadrat.map((a,i) => <div style={{backgroundColor: a, margin: `10px`, width: `100px`, height: `100px`, border: `solid white 1px`,}} key={i}></div>)
        }
        </div>
        </>
    )

}
export default Kvadratukai