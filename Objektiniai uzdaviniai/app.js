// 1 Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
// Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) 
// ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0
    }
    prideti1Akmeni() {
        this.akmenuKiekis = this.akmenuKiekis + 1;
        console.log(`imeciau 1 akmeni i kibira`)
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis = this.akmenuKiekis + kiekis
        console.log(`imeciau ${kiekis} akmenu i kibira`);
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

// 2 Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai.
// Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. 
// Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. 
// Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. 
// Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.
class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0
        this.metaliniaiPinigai = 0
    }
    ideti(kiekis) {
        kiekis > 2 ? this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis : this.metaliniaiPinigai = this.metaliniaiPinigai + kiekis
        console.log(`Ideta ${kiekis} pinigeliu`);
    }
    skaiciuoti() {
        console.log(`Popieriainiai pinigai: ` + this.popieriniaiPinigai);
        console.log(`Metaliniai pinigai: ` + this.metaliniaiPinigai);
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
        this.turinys
    }
}