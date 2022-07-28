import Random from "../functions/random"

function RandomSerialnm() {
    let num = `#######`
    for(let i = 0; i < 7; i++) {
        num = num.replace('#', Random(0,9));
      }
      return num
}
export default RandomSerialnm