const kvadrat = {
    width: `180px`,
    height: `180px`,
    margin:`15px`,
    display:`flex`,
    alignItems:`center`,
    justifyContent:`center`,
    backgroundColor: "white",
    color: `black`
}
const circle = {
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

function Kasantras({name, count}) {

    return count % 2 === 0 ? <div style={kvadrat}>{name}</div> : <div style={circle}>{name}</div>
    
}
export default Kasantras