import { useState } from "react"

function Score() {

    const [score, setScore] = useState(0)
    const plus = () => {
        setScore(s => s + 1)
    }
    const minus = () => {

        setScore(s => s - 3)
    }
    
    return (
        <>
        <h1> Your score: {score}</h1>
        <div style={{display: `flex`, gap: `20px`}}>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
        </div>
        </>
    )
}
export default Score