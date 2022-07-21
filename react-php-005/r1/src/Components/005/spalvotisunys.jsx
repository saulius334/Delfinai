function Spalvotisunys({name,array}) {
    return name.length === array.length ?
    <div>žodžių masyve ilgis: {name.length}</div> :
    name.length > array.length ? 
    <div style={{color:`green`}}>{name}</div> :
    <div style={{color:`red`}}>{name}</div>
}
export default Spalvotisunys