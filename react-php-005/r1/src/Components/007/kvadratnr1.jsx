import { useState } from "react"
import Loop from "./loop"

function Kvadrat() {

    const style = {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        width: `100px`,
        height: `100px`,
        backgroundColor: `red`,
    }
    const [input, setInput] = useState(null)
    const print = (a) => {
        setInput(a.target.value)
    }
    const [blx,setblx] = useState([])
    const create = () => {
        setblx(Loop(input, blx))
    }
    const submit = (evnt) => {
        evnt.preventDefault()
    }

    return (
        <>
        <div style={{margin:`50px`}}>
    <form style={{display:`flex`,flexDirection:`column`}} onSubmit={submit}>
    <input
    style={{textAlign:`center`}}
    type="number"
    value={input}
    onChange={print}/>

    <button 
    type="submit" 
    onClick={create}
    >Create this much blocks</button>
    </form>
    </div>
    <div style={{display:`flex`, gap:`10px`, flexWrap:`wrap`, width: `90%`}}>
    {   
        blx.map((a,i) => <div style={style} key={i}>{a}</div>)
    }
    
    </div>
    </>
    )
}

export default Kvadrat