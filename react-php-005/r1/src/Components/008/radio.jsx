import { useEffect, useState } from "react"

function Radio() {

const [radio, setRadio] = useState(`B`)
const cleck = (a) => {
    setRadio(a.target.value)
}
    return (
        <>
        <fieldset className="radio">
            <legend>radio: <b>{radio}</b></legend>
           <label htmlFor="_a">A</label> <input id="_a" type="radio" name="radio" value="A" onChange={cleck} checked={radio === `A`}/>
           <label htmlFor="_b">B</label> <input id="_b" type="radio" name="radio" value="B" onChange={cleck} checked={radio === `B`}/>
           <label htmlFor="_c">C</label> <input id="_c" type="radio" name="radio" value="C" onChange={cleck} checked={radio === `C`}/>
        </fieldset>
        </>
    )
}

export default Radio