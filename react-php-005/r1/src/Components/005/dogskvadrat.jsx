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
function Dogskvadrat({name}) {

    return <div style = {style}><p>{name}</p></div>
    

}

export default Dogskvadrat