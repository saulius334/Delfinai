function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
const girls = ['Brigita', 'Edita', 'Deimantė', 'Justė', 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė'];
//1
// Sukurkite masyvą cats iš 10 elementų, kurių reikšmės atsitiktiniai skaičiai nuo 2 iki 12;
// Sukurkite masyvą owners iš 10 elementų, kurių reikšmės atsitiktiniai vardai iš masyvo girls. 
// Vardai gali kartotis. Masyvus atspausdinkite su console.log();

let cats = [...Array(10)].map(_ => random(2, 12))
console.log(cats);
let owners = [...Array(10)].map(_ => girls[random(0, girls.length - 1)])
console.log(owners);

//2
// Suskaičiuokite kiek katinukų yra cats masyve (suraskite masyvo narių sumą).
// Sumuokite tik tas katinukų reikšmes, kurios be liekanos dalijasi iš 3.
// Rezultatą atspausdinkite su console.log();

let dalijasi = cats.filter(a => (a / 3) === ((a / 3) - (a / 3 % 1)))
console.log(dalijasi.reduce((a,b) => a + b));

//3
// Į masyvo owners pradžią, t.y. elementą su indeksu 0 (o ne galą!, o pridėkite papildomai, o neužrašykite ant mergaitės!)
// pridėkite vardą 'Nausėda'. Masyvas po pridėjimo turi turėti 11 elementų;
owners.unshift(`Nausėda`)
//4
// Sukurkite trečią masyvą catOwners, kurio reikšmė yra stringas, 
// sudarytas iš vardo ir katinukų skaičiaus (pvz Deimantė has 2 cats),
// naudodami masyvus cats ir owners pagal taisyklę:
// pirmai mergaitei iš owners masyvo priskiriamas pirmas katinukų skaičius iš cats masyvo,antrai - antras ir t.t. 
// Atkreipkite dėmesį, kad pirma mergaitė owners masyve yra ne pirmas elementas su indeksu 0 (pirmas yra 'Nausėda'),
// o antrasis su indeksu 1. Pirmas katinukų skaičius cats masyve yra standartiškai su indeksu 0. Masyvą atspausdinkite su console.log();
let catOwners = owners.map((a, i) => `${a} has ${cats[i]} cats`)
console.log(catOwners);

//5
// Suraskite vieną (tik vieną) vardą owners masyve,
// kuris kartojasi (nesvarbu kiek kartų) ir jį atspausdinkite su console.log().
owners.forEach(a => a === owners.forEach(a => a) ? console.log(a) : `nera`)