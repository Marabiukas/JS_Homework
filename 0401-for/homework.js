//-- 1 uzduotis --
console.log('1 uzduotis')

for (let i=1; i<=5; i++) {
    console.log('Labas');
}

//-- 2 uzduotis --
console.log('2 uzduotis')

for (let i=0; i<5; i++) {
    console.log(i);
}

//-- 3 uzduotis --
console.log('3 uzduotis')

for (let i=0; i<50; i+=10) {
    console.log(i);
}

//-- 4 uzduotis --
console.log('4 uzduotis')

for (let i=49; i<=53; i++) {
    console.log(i);
}

//-- 5 uzduotis --
console.log('5 uzduotis')

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

for (let i=1; i<=5; i++) {
    const r = rand(0, 10)
    console.log(r);
}

//-- 6 uzduotis --
console.log('6 uzduotis')

for (let i=1; i<=20; i++) {
    dalyba3 = i % 3;
    if (dalyba3 != 0) {
    console.log(i)}
}

//-- 7 uzduotis --
console.log('7 uzduotis')

const n=7;

for (let i=1; i<=10; i++) {
    daugyba = n * i;
    console.log(daugyba);
}

//-- 8 uzduotis --
console.log('8 uzduotis')

const x = 5;

for (let i=1; i<=x; i++) {
    colis = 2.54 * i
    console.log(`${i} colis = ${colis} cm`)
}

//-- 9 uzduotis --
console.log('9 uzduotis')

const metai = 10;
let indelis = 100;

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

for (let i=1; i<=metai; i++) {
    palukanos = indelis * 0.02;
    apvpalukanos = roundToTwo(palukanos)
    indelis += apvpalukanos;
    console.log(`${i} Metai, palukanos ${apvpalukanos}, indelis ${indelis}`);
}

//-- 10 uzduotis --
console.log('10 uzduotis')

for (let i=1582; i<=2022; i++) {
    simtmetis = i % 100;
    lygmetai = i % 4;
    lygsimt = i % 400;
    if (simtmetis == 0) {if (lygsimt == 0) console.log(i)}
    else if (lygmetai == 0) {console.log(i)}
}