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
