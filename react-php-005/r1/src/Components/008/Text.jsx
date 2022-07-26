import { useState } from "react"

function Text() {

    const [text, setText] = useState(``)
    const bzz = (a) => {
        setText(a.target.value)
        return a.target.value === `` ? setTitle(`TEXT`) : setTitle(a.target.value)
    }
    const [title, setTitle] = useState(`TEXT`)

    return (
        <>
        <fieldset>
            <legend>{title}</legend>
        <input type="text" value={text} onChange={bzz}/>
        </fieldset>
        </>
    )
}

export default Text