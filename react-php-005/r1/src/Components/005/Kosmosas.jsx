import random from "../../functions/random"

function Kosmosas({spalva}) {

    return (
        <>
    <div style = {{color: spalva, backgroundColor: `skyblue`, padding: `100px`,fontSize: random(20,60)} } >Kosmosas </div>
    <div>MARSAS</div>
    </>
    )
}


export default Kosmosas