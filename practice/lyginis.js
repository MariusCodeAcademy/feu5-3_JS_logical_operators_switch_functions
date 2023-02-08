'use strict';
console.log('lyginis.js file was loaded');

let sk = 45810;
console.log('sk ===', sk);
// jei sk dalinasi is 2 be liekanos jis yra lygins
// liekana gaunam su % zenklu
// 21 % 5 === 1

// sk yra lyginis kai sk % 2 === 0

if (sk % 2 === 0) {
  console.log(`${sk} yra lyginis`);
} else {
  console.log(`${sk} yra nelyginis`);
}

console.log('sk % 2 ===', sk % 2);

// ternary operatorius

let lyginisNelyginis = sk % 2 === 0 ? '' : 'ne';

let ats = `${sk} yra ${lyginisNelyginis}lyginis`;

console.log('ats ===', ats);
