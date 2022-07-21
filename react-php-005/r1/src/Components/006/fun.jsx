import { useState } from "react"

function Fun({spalva, setcount}) {
    const [bg, setBg] = useState(`green`)
 
    const changeB = () => {
        // setBg(`crimson` )
        setBg(b => b === `green` ? `crimson` : `green`)
    }
    const addOne = () => {
        
        setcount(c => c + 1)
    }
    return (
        <>
        <h2 style= {{
            color: spalva,
            backgroundColor: bg
        }}>FUN</h2>
        <button onClick={changeB}>Do Red</button>
        <button onClick={addOne}>Add</button>
        </>
    )
}

export default Fun