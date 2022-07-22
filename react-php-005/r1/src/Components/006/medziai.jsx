import { useState } from "react"

function Medziai() {

    const [azuolai, setazuolas] = useState([])
    const addazuolas = () => {
        setazuolas(a => a.length < 4 ? [...a, `Azuolas`] : [...a, `ka darai`])
    }
    const [berzai, setberzas] = useState([])
    const addberzas = () => {
        setberzas(a => a.length < 4 ? [...a, `Berzas`] : [...a, `Berzu sula`])
    }
    const [uosiai, setuosis] = useState([])
    const adduosis = () => {
        setuosis(a => a.length < 4 ? [...a, `Uosis`] : a.length < 6 ? [...a, `Margarita...`] : a.length < 7 ? [...a, `Ach kodel...`] : [...a, `Kiekviena ryta??`])
    }
    return (
        <>
        <div style={{display:`flex`, gap:`10px`}}>
            <div style={{width: `100px`, height: `400px`,backgroundColor: `green`}}>
                {
                azuolai.map((a,i) => <div style={{width:`100px`, height:`100px`,backgroundColor:`brown`, display:"flex",alignItems:`center`, justifyContent:`center`}}><p style={{fontSize: `16px`}} key={i}>{a}</p></div>)
                }   
            </div>
            <div style={{width: `100px`, height: `400px`,backgroundColor: `green`}}>
            {
                berzai.map((a,i) => <div style={{width:`100px`, height:`100px`,backgroundColor:`brown`, display:"flex",alignItems:`center`, justifyContent:`center`}}><p style={{fontSize: `16px`}} key={i}>{a}</p></div>)
            } 
            </div>
            <div style={{width: `100px`, height: `400px`,backgroundColor: `green`}}>
            {
                uosiai.map((a,i) => <div style={{width:`100px`, height:`100px`,backgroundColor:`brown`, display:"flex",alignItems:`center`, justifyContent:`center`}}><p style={{fontSize: `16px`}} key={i}>{a}</p></div>)
            } 
            </div>
        </div>
        <div style={{display:`flex`, gap:`50px`}}>
            <button onClick={addazuolas}>azuolas</button>
            <button onClick={addberzas}>berzas</button>
            <button onClick={adduosis}>uosis</button>
            </div>
        </>
    )
}
export default Medziai