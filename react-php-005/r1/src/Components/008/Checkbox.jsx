import { useEffect } from "react"
import { useState } from "react"

function Checkbox() {

    const [checkbx, setCheckbx] = useState({A: false, B:true, C:false,D:false})
    const hangleinput = (e) => {
        setCheckbx(a => ({...a, [e.target.value]: !a[e.target.value]}))
    }
    const [checked, setChecked] = useState([`B`])
    useEffect(() => {
        let x = []
        for(const box in checkbx) {
            if (checkbx[box]) {
                x.push(box)
            }
        }
        setChecked(x)
    },[checkbx])
    return (
        <>
        <fieldset>
            <legend>checkbox: {
                checked.map(a => <b key={a}>{a}</b>)
                }</legend>
           A <input type="checkbox" value="A" checked={checkbx.A} onChange={hangleinput}/>
           B <input type="checkbox" value="B" checked={checkbx.B} onChange={hangleinput}/>
           C <input type="checkbox" value="C" checked={checkbx.C} onChange={hangleinput}/>
           D <input type="checkbox" value="D" checked={checkbx.D} onChange={hangleinput}/>
        </fieldset>
        </>
    )
}

export default Checkbox