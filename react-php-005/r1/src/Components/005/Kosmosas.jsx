import random from "../../functions/random"

function Kosmosas({spalva, krastas, props}) { // props

    return (
        <>
    <div style = {{color: spalva /*arba props.spalva*/, backgroundColor: `skyblue`, padding: krastas,fontSize: random(20,60)} } >Kosmosas </div> 
    <div style = {props}>MARSAS</div>
    </>
    )
}


export default Kosmosas