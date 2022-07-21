const style = {
    width: `180px`,
    height: `180px`,
    margin:`15px`,
    display:`flex`,
    alignItems:`center`,
    justifyContent:`center`,
    backgroundColor: "white",
    color: `black`,
    borderRadius:`50%`,
}


function Dogscircle({name, count}) {
    return <div style={style}><p>{count + 1}. {name}</p></div>
}
export default Dogscircle