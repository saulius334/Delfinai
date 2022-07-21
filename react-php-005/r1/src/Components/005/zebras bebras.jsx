function ZebrasBebras({rand}) {
    return <h1 style = {rand === 1 ? {color: "blue"} : rand === 2 ? {color: "red"} : {color: "green"}}>Zebrai ir Bebrai</h1>
}

export default ZebrasBebras