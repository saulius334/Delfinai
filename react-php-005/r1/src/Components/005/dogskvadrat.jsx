const style = {
    width: `180px`,
    height: `180px`,
    margin:`15px`,
    display:`flex`,
    alignItems:`center`,
    justifyContent:`center`,
    backgroundColor: "white",
    color: `black`
}
function Dogskvadrat({props}) {

    return <div style = {style}><p>{props}</p></div>
    

}

export default Dogskvadrat