import Random from '../../functions/random'
function Loop(input, prevState) {
let x = [...prevState]
for (let i = 0; i < input;i++) {
    x.push(Random(100,200))
}
return x
}
export default Loop