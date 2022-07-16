function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min) }
// 1 Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
console.log(`---------------1`);
const pinigine = [...Array(random(10, 30))].map(a => random(0, 10))
console.log(`Pinigine: `);
console.log(pinigine);

// 2 Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
console.log(`---------------2`);
const two = pinigine.reduce((a,b) => a + b)
console.log(`Pinigineje pinigu: ${two}`);

// 3 Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
console.log(`---------------3`);
const three = pinigine.filter(a => a > 2).reduce((a,b) => a + b)
console.log(`Papiergaliu suma: ${three}`);

// 4 Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
console.log(`---------------4`);
const four = pinigine.map(a => a <= 2 ? 0 : a)
console.log(four);
// 5 Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
console.log(`---------------5`);
const five = [...pinigine].sort((a,b) => b - a)
const five2 = five.filter((a,i,t) => a === t[0]).length
console.log(`Didziausias pinigas: ${five[0]}`);
console.log(`Kiek ju yra: ${five2}`);

// 6 Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
console.log(`---------------6`);
console.log(pinigine.map((a, i) => a <= 2 ? i : a));

// 7 Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
console.log(`---------------7`);
let pinigine2 = pinigine.concat([...Array(30 - pinigine.length)].map(a => random(0,10)))
console.log(pinigine2);

// 8 Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
console.log(`---------------8`);
let pirmas = pinigine.filter(a => a <= 2)
let antras = pinigine.filter(a => a > 2)
console.log(pirmas);
console.log(antras);


// 9 Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
console.log(`---------------9`);
let skyreliai = [pirmas, antras]
console.log(skyreliai);

//10
console.log(`---------------10`);