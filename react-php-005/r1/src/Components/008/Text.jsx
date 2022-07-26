import { useState } from "react"

function Text() {

    const [text, setText] = useState(``)
    const bzz = (a) => {
        setText(a.target.value)
        return a.target.value === `` ? setTitle(`TEXT`) : setTitle(a.target.value)
    }
    const [color, setColor] = useState(`#00aa00`)
    const bzzcolor = (a) => {
        setColor(a.target.value)
    }
    const [title, setTitle] = useState(`TEXT`)

    return (
        <>
        <fieldset>
            <legend style={{color: color}}>{title}</legend>
        <input type="text" value={text} onChange={bzz}/>
        <div>
        <input type="color" value={color} onChange={bzzcolor}/>
        </div>
        </fieldset>
        </>
    )
}

export default Text