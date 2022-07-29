import Random from "../functions/Random"

function RndSerial() {
    let x = `########`
    for(let i = 0; i < x.length;i++) {
        x = x.replace(`#`, Random(0,9))
    }
    return x
}
export default RndSerial