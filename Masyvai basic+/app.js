function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
// 1 Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
console.log(`--------1`);
let masyvas = [...Array(30)].map(a => random(5, 25))
console.log(`Sugeneruotas masyvas: ` + masyvas);

// 2 Naudodamiesi 1 uždavinio masyvu:
console.log(`--------2`);
// 2 a) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
console.log(`Masyvas su tik >10 reiksmemis: ` + masyvas.filter(a => a > 10));
// 2 b) Raskite didžiausią masyvo reikšmę ir jos indeksą;
console.log(`Masyvas: ` + masyvas + `\nDidžiausią masyvo reikšmę:${Math.max(...masyvas)}\nJos indeksas:${masyvas.indexOf(Math.max(...masyvas))}`);
// 2 c) Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
 console.log(`visų porinių (lyginių) indeksų reikšmių suma: ` + masyvas.filter(a => a % 2 === 0).reduce((a,b) => a + b));
 // 2 d) Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
let minusas = masyvas.map((a,i) => a - i)
console.log(minusas);
// 2 e) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
 let minusas2 = minusas.concat([...Array(10)].map(a => random(5, 25)))
 console.log(minusas2);
 //2 f) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
let poriniai = minusas2.filter((a, i) => i % 2 === 0)
let neporiniai = minusas2.filter((a, i) => !(i % 2 === 0))
console.log(`Porines indeksų reikšmes: ` + poriniai);
console.log(`Neporines indeksų reikšmes: ` + neporiniai);
//2 g) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
console.log(`Pirminio masyvo su poriniais indeksais elementai didesni už 15 padarykite lygius 0: ` + masyvas.filter((a, i) => i % 2 === 0).map(a => a > 15 ? 0 : a));
//2 h) Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
console.log(`pirmas (mažiausias) indeksas, kurio elemento reikšmė didesnė už 10: ` + masyvas.findIndex(a => a > 10));
 // 3 Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
 console.log(`--------3`);
 let x = [`A`, `B`, `C`, `D`]
 let raideles = [...Array(200)].map(a => x[random(0, x.length - 1)])
 let count = []
 for (const i of raideles.flat()) {
 count[i] ? count[i] += 1 : count[i] = 1
 }
console.log(count);
// 4 Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
console.log(`--------4`);
let pirmas = [...Array(200)].map(a => x[random(0, x.length - 1)])
let antras = [...Array(200)].map(a => x[random(0, x.length - 1)])
let trecias = [...Array(200)].map(a => x[random(0, x.length - 1)])
let ohoho = []
for (let i = 0; i < pirmas.length; i++) {
    ohoho.push(pirmas[i] + antras[i] + trecias[i])
}
let unikalios = [...new Set(ohoho)]
console.log(`Sudetas masyvas: `);
console.log(ohoho);
console.log(`Unikalios reiksmes: `);
console.log(unikalios);
console.log(`Unikalios kombinacijos: `);
let kombinac = unikalios.map(a => a.split(``).sort().join(``)).sort()
console.log([...new Set(kombinac)]);


console.log(`ayo wtf ?`);

// 5 Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
console.log(`--------5`);
// let one = [...Array(100)].map(a,i,t => t.includes(random(100, 999)) ? )
// console.log(one);
let one = []
while (one.length < 100) {
  let x = random(100, 999)
  if (one.includes(x)) {
    continue
  } else {
    one.push(x)
  }
}
console.log(one);
let two = []
while (two.length < 100) {
  let x = random(100, 999)
  if (two.includes(x)) {
    continue
  } else {
    two.push(x)
  }
}
console.log(two);
// 6 Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
console.log(`--------6`);
let filtered = one.filter(a => two.includes(a) === false)
console.log(filtered);

// 7 Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.
console.log(`--------7`);
let kartojasi = one.filter(a => two.includes(a))
console.log(kartojasi);

// 8 Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 5 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
console.log(`--------8`);
let wtf = [...Array(Math.max(...one))]
for (let i = 0; i < wtf.length;i++) {
  wtf[one[i]] = two[i]
}
console.log(wtf);

// 9 Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
console.log(`--------9`);
let taisykle = [random(5,25), random(5,25), ...Array(8)]
for(let i = 2; i < taisykle.length;i++) {
taisykle[i] = taisykle[i - 2] + taisykle[i - 1]
}
console.log(taisykle);