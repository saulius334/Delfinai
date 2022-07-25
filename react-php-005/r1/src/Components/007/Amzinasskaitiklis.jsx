import { useEffect } from "react"
import { useState } from "react"

function ForeverYoung() {
    
    const [count, setCount] =  useState(null)


    useEffect(() => {
        const howmuch = localStorage.getItem(`myLife`)
        if (howmuch === null) {
            setCount({yearsPassed: 0})
        } else {
            setCount(JSON.parse(howmuch))
        }
    },[])

    useEffect(() => {
        if(count === null) {
            return;
        } else {
            localStorage.setItem(`myLife`, JSON.stringify(count))
        }
    }, [count])

    const add = () => {
        setCount(c => ({...c, yearsPassed: c.yearsPassed + 1}))
    }
    return (
        <>
        <h1 style={{fontSize: `77px`, color:`#777777`}}>{count?.yearsPassed}</h1>
        <button onClick={add}>+1</button>
        </>
    )
}
export default ForeverYoung