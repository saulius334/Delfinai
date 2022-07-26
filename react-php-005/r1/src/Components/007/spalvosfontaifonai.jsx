import { useState } from "react"

function SpalvosFontai() {
    const [text,setText] = useState(``)
    const texting = (a) => {
        setText(a.target.value)
    }
    const [color,setColor] = useState(``)
    const changecolor = (a) => {
        setColor(a.target.value)
    }
    const [FONTsize,setfonoColor] = useState(16)
    const chngFONTsize = (a) => {
        setfonoColor(a.target.value)
    }
    const [font,setfont] = useState(``)
    const changefont = (a) => {
        setfont(a.target.value)
    }
    

    return (
        <>
        <div style={{margin:`50px`,display:`flex`, flexDirection:`column`,gap:`30px`, alignItems:`center`}}>
        <span>Jusu tekstas: </span>
        <input type="text" value={text} onChange={texting}/>
        <span style={{color: color, fontSize: Number(FONTsize), fontFamily: font }}>{text}</span>
        <div style={{display:`flex`, gap:`30px`}}>
            <div style={{display:`flex`, flexDirection:`column`}}>
         <label>Teksto Spalva</label>
        <select value={color} onChange={changecolor}>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="gray">gray</option>
        </select>
        </div>
        <div style={{display:`flex`, flexDirection:`column`}}>
          <label>Fono dydis</label>
        <select value={FONTsize} onChange={chngFONTsize}>
        <option value="20">smol</option>
        <option value="30">mid</option>
        <option value="40">larg</option>
        <option value="50">xlarg</option>
        <option value="160">chonky</option>
        </select>
        </div>
        <div style={{display:`flex`, flexDirection:`column`}}>
        <label>Teksto Stilius</label>
        <select value={font} onChange={changefont}>
        <option value="sans-serif">sans-serif</option>
        <option value="monospace">monospace</option>
        <option value="fantasy">fantasy</option>
        <option value="cursive">cursive</option>
        <option value="Consolas">Consolas</option>
        </select>
        </div>
        </div>
        </div>
        </>
    )
}
export default SpalvosFontai