// 1 Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
// Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) 
// ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
    static visiAkmenys = 0
    static akmenuSkaiciusVisuoseKibiruose() {
        console.log(`Visi akmenys: ` + Kibiras1.visiAkmenys);
    }
    static bendrasAkmenuSkaicius(akmenuSkaicius) {
        Kibiras1.visiAkmenys += akmenuSkaicius
    }
    constructor() {
        this.akmenuKiekis = 0
    }
    prideti1Akmeni() {
        this.akmenuKiekis = this.akmenuKiekis + 1;
        console.log(`imeciau 1 akmeni i kibira`)
        Kibiras1.bendrasAkmenuSkaicius(1)
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis = this.akmenuKiekis + kiekis
        console.log(`imeciau ${kiekis} akmenu i kibira`);
        Kibiras1.bendrasAkmenuSkaicius(kiekis)
    }
    kiekPririnktaAkmenu() {
        console.log(`Kiek pririnkta akmenu: ` + this.akmenuKiekis);
    }
}
const kibiras2 = new Kibiras1()
kibiras2.kiekPririnktaAkmenu()
kibiras2.prideti1Akmeni()
kibiras2.kiekPririnktaAkmenu()
kibiras2.pridetiDaugAkmenu(20)
kibiras2.kiekPririnktaAkmenu()
Kibiras1.akmenuSkaiciusVisuoseKibiruose()

// 2 Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai.
// Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. 
// Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. 
// Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. 
// Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.
class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0
        this.metaliniaiPinigai = 0
        this.monetos = 0
        this.banknotai = 0
    }
    ideti(kiekis) {
        kiekis > 2 ? this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis : this.metaliniaiPinigai = this.metaliniaiPinigai + kiekis
        kiekis > 2 ? this.banknotai++ : this.monetos++
        console.log(`Ideta ${kiekis} pinigeliu`);

    }
    skaiciuoti() {
        console.log(`Popieriainiai pinigai: ` + this.popieriniaiPinigai);
        console.log(`Metaliniai pinigai: ` + this.metaliniaiPinigai);
    }
    monetos() {
        console.log(`Pinigineje yra ${this.monetos} monetos`);
    }
    banknotai() {
        console.log(`Pinigineje yra ${this.banknotai} banknotai`);
    }
}

const pinigine1 = new Pinigine()
pinigine1.skaiciuoti()
pinigine1.ideti(1)
pinigine1.ideti(5)
pinigine1.ideti(2)
pinigine1.ideti(4)
pinigine1.ideti(10)
pinigine1.ideti(2)
pinigine1.ideti(1)
pinigine1.ideti(3)
pinigine1.skaiciuoti()

// 3 Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0.
// Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
//  O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių.
//  Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.
console.log(`-----Troleibusai------`);

class Troleibusas {
static visiKeleiviai = 0
static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
    Troleibusas.visiKeleiviai = Troleibusas.visiKeleiviai + keleiviuSkaicius
    console.log(`Bendras keleiviu skaicius: ${Troleibusas.visiKeleiviai}`);
    
}
constructor(name) {
    this.name = name
    this.keleiviuSkaicius = 0
}
    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius = this.keleiviuSkaicius + keleiviuSkaicius
        console.log(`Ilipo ${keleiviuSkaicius} pakeleiviai i ${this.name}`);
        Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius)
    }
    islipa(keleiviuSkaicius) {
        if (this.keleiviuSkaicius >= keleiviuSkaicius) {
            this.keleiviuSkaicius -=  keleiviuSkaicius
            console.log(`Islipo ${keleiviuSkaicius} keleiviai is ${this.name}: liko ${this.keleiviuSkaicius} vaziuojanciu.`);
            Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius * -1)
        } else {
            console.log(`Islipo visi keleiviai is ${this.name}. Negali islipti daugiau nei ilipo.`);
            Troleibusas.bendrasKeleiviuSkaicius(-this.keleiviuSkaicius)
            this.keleiviuSkaicius = 0
        }
         }
    vaziuoja() {
        this.keleiviuSkaicius < 1 ? console.log(`Troleibuse ${this.name} keleiviu nera, pravalas...`) : console.log(`${this.name} dabar veza ${this.keleiviuSkaicius} keleivius`);
    }
    keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log(`Bendras keleiviu skaicius: ` + this.visiKeleiviai);
    }
}
const Trulikas = new Troleibusas(`Trulikas`)
Trulikas.vaziuoja()
Trulikas.ilipa(5)
Trulikas.vaziuoja()
Trulikas.islipa(3)
Trulikas.vaziuoja()
Trulikas.ilipa(10)
Trulikas.islipa(15)

// 4 (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. 
// Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), 
// kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). 
// Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^

//5 (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. 
// Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). 
// Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). 
// Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.

class PirkiniuKrepselis {
    constructor() {
        this.turinys = new Map()
    }
    idetiSureli(kiekis) {
        let suris = this.turinys.get(`Surelis`)
        this.turinys.has(`Surelis`) ? this.turinys.set(`Surelis`, suris + kiekis) : this.turinys.set(`Surelis`, kiekis)
    }
    idetiPieno(kiekis) {
        let pienokiekis = this.turinys.get(`Pienas`)  
        this.turinys.has(`Pienas`) ? this.turinys.set(`Pienas`, pienokiekis + kiekis) : this.turinys.set(`Pienas`, kiekis)
    }
    idetiDuonos(kiekis) {
        let duonos = this.turinys.get(`Duona`)
        this.turinys.has(`Duona`) ? this.turinys.set(`Duona`, duonos + kiekis) : this.turinys.set(`Duona`, kiekis)
    }
    krepselioTurinys() {
    console.log(this.turinys);
    }
}

const krepsys = new PirkiniuKrepselis()


krepsys.idetiDuonos(5)
krepsys.idetiDuonos(5)
krepsys.idetiSureli(9)
krepsys.idetiSureli(9)
krepsys.idetiPieno(2)
krepsys.idetiPieno(2)
krepsys.krepselioTurinys()

// 6 Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų.Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// 7 (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų prie statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// 8 Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis),
//  kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(),
//   kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(),
//    kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100.
//     Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
 class Stikline {
    constructor(name, turis) {
        this.name = name
        this.kiekis = 0
        this.turis = turis
    }
    ipilti(kiekis) {
        if (this.kiekis + kiekis > this.turis) {
            this.kiekis = this.turis
            console.log(`i ${this.name} ipyle ${kiekis} gramus. Per daug ipylei bl! Bega per krastus! ${this.name} sklidnas ties ${this.turis} gramais`)
        } else {
            this.kiekis = this.kiekis + kiekis
            console.log(`i ${this.name} ipyle ${kiekis} gramus`)

        }
    }
    ispilti() {
        this.kiekis = 0
        console.log(`   spylei ${this.name}!!! Eik pirkt nauja! ${this.name} ${this.kiekis} gr.`);
    }
    stiklinejeYra() {
        console.log(`${this.name} yra: ` + this.kiekis + ` gramai`);
    }
 }

 const bokalas = new Stikline(`bokalas`,200)
 const taure = new Stikline(`taure`,150)
 const cerka = new Stikline(`cerka`, 100)
 bokalas.ipilti(29)
 bokalas.stiklinejeYra()
 bokalas.ipilti(170)
 bokalas.stiklinejeYra()
 bokalas.ipilti(170)
 bokalas.ispilti()

  // 9 Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys, kuri turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 
//   ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos 
//   konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip:
//    valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus,
//     jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių
//      ir valgomų grybų (gali būti truputį daugiau nei dydis).

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
class Grybas {
    constructor() {
        this.valgomas = [true, false][random(0,1)]
        this.sukirmijes = [true, false][random(0,1)]
        this.svoris = random(5, 45)
    }
}
class Krepsys {
    constructor() {
        this.dydis = 500
        this.prikrauta = 0
        this.krepsiovVidus = new Map([])
    }
    kiekgrybu() {
        console.log(this.prikrauta);
    }
    deti(grybas) {
        if (grybas.valgomas === true && grybas.sukirmijes === false) {
            this.krepsiovVidus.set(grybas)
            this.prikrauta++
        }
    }
}

let krepsys1 = new Krepsys()

// while (krepsys1.prikrauta < krepsys1.dydis) {
// let randomGrybas = new Grybas()
// if (randomGrybas.valgomas === true && randomGrybas.sukirmijes === false) {
//     Object.assign(krepsys1, {randomGrybas})
//     krepsys1.prikrauta++
// } else {
//     continue
// }
// }
function EitiGrybauti() {
while (krepsys1.prikrauta < krepsys1.dydis) {
    let randomGrybas = new Grybas()
    krepsys1.deti(randomGrybas)
}
}
// EitiGrybauti()
console.log(krepsys1);