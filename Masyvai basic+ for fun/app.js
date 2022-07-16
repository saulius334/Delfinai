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

//10 Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
console.log(`---------------10`);
skyreliai.push(['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'])
console.log(skyreliai);

// 11 Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
console.log(`---------------11`);
skyreliai[2].sort()
console.log(skyreliai);

// 12 Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
console.log(`---------------12`);
let pasirinkimas = [`MasterCard`, `Visa`]
while (skyreliai[2].length < 20) {
    skyreliai[2].push(pasirinkimas[random(0, 1)])
}
console.log(skyreliai[2]);

// 13 Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
console.log(`---------------13`);
let count = 0;
for (const n of skyreliai[2]) {
    n === `MasterCard` ? count = count + 1 : n === `Visa` ? count-- : count = count + 0
}
console.log(count > 0 ? `Daugiau MasterCard` : count < 0 ? `Daugiau Visa` : `Po lygiai`);

// 14 Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
console.log(`---------------14`);
skyreliai.push([...Array(10)].map(a => random(1000000000, 9999999999)))
console.log(skyreliai);

// 15 Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
console.log(`---------------15`);
skyreliai[3].sort((a,b) => b - a)
console.log(skyreliai);

// 16 Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
console.log(`---------------16`);
let penkisimtai = [random(3, 10)]
while (penkisimtai.reduce((a,b) => a + b) < 500) {
    penkisimtai.push(random(3, 10))
}
skyreliai[1].push(...penkisimtai)
console.log(skyreliai);

//17 Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
console.log(`---------------17`);
let laimingi = skyreliai[3].filter(a => (a / 777) % 2 === 0)
console.log(laimingi.length > 0 ? `Jus laimejote! Laimingu bilietu: ${laimingi.length}` : `Bandyk dar karta!`);

// 18 Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
console.log(`---------------18`);
let gyvunai = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas']
console.log(gyvunai.sort((a,b) => a.length - b.length));
skyreliai.push(gyvunai)
console.log(skyreliai);