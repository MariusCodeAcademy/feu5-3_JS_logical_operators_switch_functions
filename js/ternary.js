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

let userName1 = 'James';
let gender1 = 'male';
let hasDrivigLicence1 = true;
let ownsHouse1 = false;

// Mr James drives car. He does not own a house.
let title1 = gender1 === 'male' ? 'Mr' : 'Ms';
let heOrShe1 = gender1 === 'female' ? 'She' : 'He';
let houseOwning1 = ownsHouse1 === true ? 'owns' : 'does not own';
// parasyti kad priklausomai nuo hasDrivigLicence1 butu 'drives' arba 'does not drive'
let result1 = `${title1} ${userName1} drives car. ${heOrShe1} ${houseOwning1} a house.`;

console.log('result1 ===', result1);

let userName2 = 'Jane';
let gender2 = 'female';
let hasDrivigLicence2 = true;
let ownsHouse2 = true;
// Ms Jane does not drive car. She owns a house.
