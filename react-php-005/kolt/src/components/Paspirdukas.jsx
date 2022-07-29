import Random from "../functions/Random"

function RndSerial() {
    let x = `########`
    for(let i = 0; i < x.length;i++) {
        x = x.replace(`#`, Random(0,9))
    }
}



class Scooter {
    constructor(nRida) {
        this.registrationCode = RndSerial();
        this.isBusy = false;
        this.rida = nRida === `` ? 0 : nRida
    }
}


function Paspirdukas(nRida) {
    return new Scooter(nRida)
}
export default Paspirdukas