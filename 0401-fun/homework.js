//-- 1 uzduotis --
console.log('1 uzduotis')

function daugyba(a, b) {
    return a * b;
}

console.log(daugyba(3, 5));

//-- 2 uzduotis --
console.log('2 uzduotis')

function palyginimas(a, b) {
    c = a - b
if (c > 0) {return 'a yra daugiau uz b'}
if (c < 0) {return 'a yra maziau uz b'}
if (c == 0) {return 'a yra lygu b'}
}

console.log(palyginimas(5, 8));
console.log(palyginimas(9, 8));
console.log(palyginimas(2, 2));

//-- 3 uzduotis --
console.log('3 uzduotis')

function Metai (metai) {
simtmetis = metai % 100;
kelsimt = metai % 400;
kelmetai = metai % 4;

if (simtmetis == 0) {if (kelsimt == 0) {return ' Metai - keliamieji'}}
else if (kelmetai == 0) {return 'Metai - keliamieji'} else return 'Metai - nekeliamieji'
}

console.log(Metai(2022));

//-- 4 uzduotis --
console.log('4 uzduotis')

function kvadratas(N) {
    return N * N
}

console.log(kvadratas(7));

//-- 5 uzduotis --
console.log('5 uzduotis')

function skaiciuSuma (N) {
    if (N<=1) {
    return 'Iveskite skaiciu didesni uz 1'}
    let suma = 0;
    for (let i=1; i<N; i++)
    suma += i;
    return `Skaiciu iki ${N} suma yra lygi ${suma}`
}

console.log(skaiciuSuma(10));

//-- 6 uzduotis --
console.log('6 uzduotis')

function Sveikadalyba(N) {
    let suma = 0;
    for (let i=2; i<N; i++)
        if (N % i == 0) {
        suma += 1;
    }
    return `${N} be liekanos dalijasi is ${suma} skaiciu, neskaitant 1 ir saves`
}

console.log(Sveikadalyba(100))

//-- 7 uzduotis --
console.log('7 uzduotis')

function tekstoIlgis(tekstas) {
    return `${tekstas} - teksto ilgis ${tekstas.length} zenklu`
}

const text = 'Laikas eiti miegoti'
console.log(tekstoIlgis(text))

//-- 8 uzduotis --
console.log('8 uzduotis')

const telefonoNr = [3, 7, 0, 6, 7, 8, 2, 0, 3, 5]

function telefonoNumeris(telefonoNr) {
    return `(${telefonoNr[0]}${telefonoNr[1]}${telefonoNr[2]}) ${telefonoNr[3]}${telefonoNr[4]}${telefonoNr[5]}-${telefonoNr[6]}${telefonoNr[7]}${telefonoNr[8]}${telefonoNr[9]}`
}

console.log(telefonoNumeris(telefonoNr));

//-- 9 uzduotis --
console.log('9 uzduotis')


function tekstuPalyginimas (tekstas1, tekstas2) {
    x = tekstas1.length - tekstas2.length
if (x > 0) {return 'Pirmas tekstas ilgesnis'}
if (x < 0) {return 'Antras tekstas ilgesnis'}
if (x == 0) {return 'Tekstai lygus'}
}

const a = 'Labas rytas';
const b = 'Labas vakaras';

console.log(tekstuPalyginimas(a, b))

//-- 10 uzduotis --
console.log('10 uzduotis')

function Araide(tekstas) {
    let suma = 0;
    Z = tekstas.length
    for (let i=0; i<=Z; i++)
    if (tekstas[i] === 'a') {
        suma +=1
    }
    return `Tekste yra ${suma} a raidziu`
}

const T = 'Labas vakaras';
console.log(Araide(T))