function ZebrasBebras({props}) {
    return <h1 style = {props === 1 ? {color: "blue"} : props === 2 ? {color: "red"} : {color: "green"}}>Zebrai ir Bebrai</h1>
}

export default ZebrasBebras