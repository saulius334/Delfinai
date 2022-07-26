import { useState } from "react"

    let options = [
        {value: 1, text: `one`},
        {value: 2, text: `two`},
        {value: 3, text: `three`},
        {value: 100, text: `simts`}
    ]

function Select() {

    const [select, setSelect] = useState(`100`)
    const hangleinput = (a) => {
        setSelect(a.target.value)
    }
    const [selected, setSelected] = useState(`100`)
    const sele = () => {
        setSelected(options.find(o => select == o.value).text) // wtf ?
    }
    return (
        <>
        <fieldset>
            <legend>Select: {selected}</legend>
            <select value={select} onChange={hangleinput}>
               {
                options.map(o => <option key={o.value} value={o.value}>{o.text}</option>)
               }
            </select>
            <div>
            <button onClick={sele}>CLICK ME</button>
            </div>
        </fieldset>
        </>
    )
}

export default Select