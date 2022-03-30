//-- 1 uzduotis --
console.log('1 uzduotis')

const n = 20;

if (n >=0 ) {
    console.log(',,Geras"')
} else {
    console.log(',,Blogas"')
}

//-- 2 uzduotis --
console.log('2 uzduotis')

const N1 = 'zalia';
const N2 = 'geltona';
const N3 = 'raudona';

if ( N2 ) {
console.log('Palaukite:', N2)
}

//-- 3 uzduotis --
console.log('3 uzduotis')

const d = 3;
const dn = 5;
const k = 18;

if (d*dn >= k) {
    console.log('Knygos telpa i dezes')
} else {
    console.log('Knygos netelpa i dezes')
}

//-- 4 uzduotis --
console.log('4 uzduotis')

let a = 5;
let b = 7;

if (a > b) {
    console.log(--a, ++b) 
} else {
    console.log(++a, --b) 
}

//-- 5 uzduotis --
console.log('5 uzduotis')

const c = 50;
const p = 20;
let x = Math.floor ( c / p );
let l = c - p * x;

console.log(`Saulius nusipirks ${x} porcijas, liks ${l} centu`);

//-- 6 uzduotis --
console.log('6 uzduotis')

const degtukai = 1

if (degtukai % 3 == 0) {
    console.log('Trikampi sudelioti galima')
} else {
    console.log('Trikampio sudelioti negalima')
}

//-- 7 uzduotis --
console.log('7 uzduotis')

//-- 8 uzduotis --
console.log('8 uzduotis')

const num = 1;

if (num % 2 == 0) {
    console.log('Kambari tvarkys vyresnelis') 
}  else {
    console.log('Kambari tvarkys jaunesnelis')
}

//-- 9 uzduotis --
console.log('9 uzduotis');

let Metai = 2024;

const Olimpiniai = (Metai - 1896) / 4

if ( (Metai - 1896) % 4 == 0) {
    console.log('Olimpiada Nr.:', Olimpiniai + 1)
} else {
    console.log('Metai neolimpiniai')
}

//-- 10 uzduotis --
console.log('10 uzduotis');

let v1 = 8;
let m1 = 29;
let m2 = 23;
let v = 9;
let m = 5;

const X = v1 * 60 + m1 + m2;
const Y = v * 60 + m;

const Z = Y - X;

if (Z >= 0) {
    console.log('Petras i pamoka nepaveluos')
} else {
    console.log('Petras i pamoka paveluos')
}