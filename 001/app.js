console.log(`labas`);

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

    let x = []
    for (let i = 0; i < 10 ;i++) {
        x.push(random(7, 77))
    }
    // console.log(x);
  const cats = ['Murka', 'Pilkis', 'Rainius'];

  function randomcat(a) {
    let x = cats[random(0, 2)]
    return x
  }

// for (const i of x) {
//     console.log(i);
// }
// console.log(x);

x.forEach(n => console.log(n))
console.log(`---------------------1`);
// 1
function pirmas () {
const one = random(0, 4)
const two = random(0, 4)
return one > two ? one / two : two /one
}
console.log(pirmas());

//2
console.log(`----------2`);
function antras () {
const one = random(0, 25)
console.log(one);
const two = random(0, 25)
console.log(two);
const three = random(0, 25)
console.log(three);
return (one < two && two < three || three < two && two < one) ? two : (two < one && one < three || three < one && one < two) ? one : (two < three && one > three || one < three && two > three) ? three : `OMG ! Du lygus skaicia !!! spauskite ctrl+R`
}
console.log(antras());

//3
console.log(`----------3`);
function trecias() {
  const a = random(1, 10)
  console.log(`pirma krastine ${a}`);
  const b = random(1, 10)
  console.log(`antra krastine ${b}`);
  const c = random(1, 10)
  console.log(`trecia krastine ${c}`);
  return (a + b > c && a + c > b && b + c > a) ? `Galima seniukai` : `Tai kad nelabai galima`
}
console.log(trecias());
//4
console.log(`----------4`);

function keturi() {
const array = []
for (let i = 0; i < 4; i++) {
  array.push(random(0,2))
}
const lol = {}
for(const x of array) {
  lol[x] ? lol[x]++ : lol[x] = 1
  }
  return lol
}
console.log(keturi());

//5
console.log(`----------5`);
for (let i = 0; i <3;i++) {
  let x = random(-10,10)
  x > 0 ? console.log(`-${x}-`) : x === 0 ? console.log(`*${x}*`) : console.log(`+${x}+`);
}

//6
console.log(`----------6`);
function sesi () {
const zvakes = random(5, 3000)
return zvakes >= 2000 ? `Uzsakyta zvakiu: ${zvakes}\n Zvakes kaina: 0.96EUR\n Viso kaina: ${(zvakes * 0.96).toFixed(2)}EUR` : zvakes >= 1000 ? `Uzsakyta zvakiu: ${zvakes}\n Zvakes kaina: 0.97EUR\n Viso kaina: ${(zvakes * 0.97).toFixed(2)}EUR` : `Uzsakyta zvakiu: ${zvakes}\n Zvakes kaina: 1.00EUR\n Viso kaina: ${zvakes}EUR`
}
console.log(sesi());

//7
console.log(`----------7`);
let arry = [random(0,100), random(0,100), random(0,100)]
console.log(arry);
console.log(`Aritmetinis vidurkis:${(arry.reduce((a,b) => a + b) / 3).toFixed(2)}`);
console.log(arry.filter(i => i < 90 && i > 10));
console.log(arry.filter(i => i < 90 && i > 10).length > 0 ? `Aritmetinis vidurkis su 10-90 reiksmemis: ${(arry.filter(i => i < 90 && i > 10).reduce((a,b) => a + b) / arry.filter(i => i < 90 && i > 10).length).toFixed(2)}` : `Visi skaiciai 10-90 tarpe`)
