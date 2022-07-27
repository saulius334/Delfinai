function Rangebox ({width, height, color,key}) {



    return (
        <>
        <div style={{width: +width, height: +height, backgroundColor: color,margin:`10px`}} key={1}></div>
        </>
    )
}

export default Rangebox