import { useState } from "react"

function CounterSimple() {
const [count, addCount] = useState(0)
const plius = () => {
    addCount(a => a + 1)
}



return (
    <>
    <div key={0}>
    {count}
    <button onClick={plius}>+1</button>
    </div>
    </>
)
}
export default CounterSimple