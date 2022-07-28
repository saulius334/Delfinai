import Random from "../functions/random"

function RandomSerialnm(raide) {
    let num = `#######`
    for(let i = 0; i < 7; i++) {
        num = num.replace('#', Random(0,9));
      }
      return raide === `A` ? `Avis ` + raide + num : `Karve ` + raide + num
}
export default RandomSerialnm