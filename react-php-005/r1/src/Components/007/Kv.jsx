import { useEffect } from "react"

function Kv({c}) {


    // useEffect(() => {
    //     console.log(`as`);
    //     return () => {
    //         console.log(`mireu`);
    //     }
    // }, [])
    return (
        <>
        <div className='kv' style={{
        backgroundColor: c+`69`,
        borderColor: c}}></div>
        </>
    )
}
export default Kv