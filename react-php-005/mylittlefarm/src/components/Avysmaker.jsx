import Random from "../functions/random"
import RandomSerialnm from "./RandomSerialnm"

function Avysmaker() {
    const style = {
        width: `80px`,
        height: `80px`,
        backgroundColor:`Brown`
    }
    const pstyle = {
        fontSize: `16px`
    }

    return(
        <>
        {
            [...Array(Random(5,20))].map((a,i) => <div style={style} key={i}><p style={pstyle}>Avis A{RandomSerialnm()}</p></div>)
        }
        </>
    )
}
export default Avysmaker