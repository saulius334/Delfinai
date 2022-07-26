import { useState } from "react"

function Select() {

    const [select, setSelect] = useState(`100`)
    const hangleinput = (a) => {
        setSelect(a.target.value)
    }
    const [selected, setSelected] = useState(`100`)
    const sele = () => {
        setSelected(select)
    }
    return (
        <>
        <fieldset>
            <legend>Select: {selected}</legend>
            <select value={select} onChange={hangleinput}>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">Simtas</option>
            </select>
            <div>
            <button onClick={sele}>CLICK ME</button>
            </div>
        </fieldset>
        </>
    )
}

export default Select