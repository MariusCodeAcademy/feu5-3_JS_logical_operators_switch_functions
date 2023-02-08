'use strict';
console.log('ternary.js file was loaded');

// priklausomai nuo amziau, galima vairuot, dar negalima vairuot

let age = 35;
let canDriveResult;

if (age < 18) {
  // dar negalima vairuot
  canDriveResult = 'dar negalima vairuot';
} else {
  // galima vairuot
  canDriveResult = 'galima vairuot';
}
console.log('canDriveResult ===', canDriveResult);

// Ternary

// (salyga) ? <jei true>: <jei false>;

canDriveResult = age < 18 ? 'dar negalima vairuot' : 'galima vairuot';

console.log('canDriveResult ternary ===', canDriveResult);

// time = , morning, day, evening

let time = 'morning';
// nested ternary operator
let timeOfDay =
  time === 'morning'
    ? 'labas rytas'
    : time === 'day'
    ? 'laba diena'
    : 'labas vakaras';

// console.log('timeOfDay ===', timeOfDay);
