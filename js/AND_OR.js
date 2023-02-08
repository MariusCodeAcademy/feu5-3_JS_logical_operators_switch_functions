'use strict';
console.log('AND_OR.js file was loaded');

let n1 = '8';

// parasyti ar n1 yra skaiciaus tipo IR teigiamas?
// nested if
if (typeof n1 === 'number') {
  // n1 yra sk tipo
  if (n1 > 0) {
    // n1 yra skaicaus tipo ir daugiau uz 0
  }
}
// logical operator
if (typeof n1 === 'number' && n1 > 0) {
  // n1 yra skaicaus tipo ir daugiau uz 0
  console.log('n1 yra skaicaus tipo ir daugiau uz 0');
}

// lentele
// AND - lietuviskai IR
console.log(`true && true === ${true && true}`);
console.log(`true && false === ${true && false}`);
console.log(`false && true === ${false && true}`);
console.log(`false && false === ${false && false}`);

// OR - lietuviskai ARBA
console.log('true || true ===', true || true);
console.log('true || false ===', true || false);
console.log('false || true ===', false || true);
console.log('false || false ===', false || false);

// NOT - ! - neigima arba priesiga reiksme
console.log('!true ===', !true);
console.log('!false ===', !false);
console.log('!!"james" ===', !!'james');
console.log('!!0 ===', !!0);
console.log('!!"" ===', !!'');
console.log('!!" " ===', !!' ');

// !! konvertavimas reiksmes i boolean
// '!!"james"
// '!!true
// '!false
// 'true

let username = null;
let isUserOnline = !!username;
