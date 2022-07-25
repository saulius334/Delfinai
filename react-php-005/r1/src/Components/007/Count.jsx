import { useEffect } from "react"
import { useState } from "react"

function Count({start}) {

    const [count, setcount] = useState(null)

    const plius = () => {
        setcount(a => a + 5)
    }
    useEffect(() => {
        setcount(start)
    }, [start])

    return (
        <>
        <h2>{count}</h2>
        <button onClick={plius}>+5</button>
        </>
    )
}
export default Count