//-- 1 uzduotis --
console.log('1 uzduotis')

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

let suma = 0

while (suma < 100) {
    
    let randomNum = rand(0, 10);
    suma += randomNum;
    console.log(randomNum, suma);
}

//-- 2 uzduotis --
console.log('2 uzduotis')

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

let randnum = rand(0, 10);
let summa = randnum;
console.log(randnum, summa);

while (summa % 7 != 0) {
    let randnum = rand(0, 10);
    summa += randnum;
    console.log(randnum, summa);
}

//-- 3 uzduotis --
console.log('3 uzduotis')

let d = 1;
let s = 1;
let m = 17;

while (s <= m) {
    d++;
    s += d;
}

svid = m / d

console.log(`Perskaitis per ${d} dienu`)
console.log(`Vidutiniskai per diena perskaitis ${svid.toFixed(2)} skyriu`)

//-- 4 uzduotis --
console.log('4 uzduotis')

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

let randomnum = rand(0, 10);

while (randomnum !=5) {
    randomnum = rand(0, 10);
    console.log(randomnum)
    }

//-- 5 uzduotis --
console.log('5 uzduotis')

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

let atsskaicius = rand(0, 10);
let ciklas = 1;
console.log(atsskaicius);

while (atsskaicius !=7 ) {
    atsskaicius = rand(0, 10)
    console.log(atsskaicius);
    ciklas++;
}
console.log('Ciklu skaicius:', ciklas);