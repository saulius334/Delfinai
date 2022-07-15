//ARROW FUNCTIONE jei yra viena eilute galima nerasyti return, jei yra daugiau eiluciu reikia butinai RETURN
const x = [`0asd`, `5fa`, `2asf`, `4asdd`, `10dd`, `dd20`]

x.forEach(a => a + 5)

console.log(x);

x.forEach((a, i) => console.log(a,i))
//forEach nesukuria naujo array, tiesiog praeina per visa masyva ir gali daryt ka nori su tam tikru array itemu

x.map(a => console.log(a))

// mapas sukuria nauja array, eina per array, kazka padaro tam skaiciui ir imeta i nauja array. ILGIS NAUJO ARRAY NESIKEICIA
let mapas = x.map((a, i) => a + i)
console.log(mapas);


let filteris = x.filter(a => a + 69)
console.log(filteris);

// filteris funkcijoj reikia parasyti TRUE jeigu nori ideti ta itema i array, ir FALSE jeigu jo nedeti
// jis pats issprendzia NEREIKIA IF

//SORT keicia orginalu array, NEDARO KOPIJOS!, nekeicia reiksmiu, array length irgi nekeicia.
// jeigu 
console.log(`---sort----`);
let sort = x.sort((a,b) => {
if (a > b) return -1;
if (a < b) return 1;
return 0;
});
 // jeigu cia irasai tik -skaiciu tai array padarys reverse. lygiai taspatas kas .reverse()
console.log(sort);

let z = [6, 1, 2, 5, 10, 90]
let reduce = z.reduce((a,b) => a + b)
console.log(reduce);
