'use strict';
console.log('palyginimai.js file was loaded');

// 2 * 2 / 2 == "1" || 5 * 5 === 25
// 4 / 2 == "1" || 25 === 25
// 2 == "1" || true
// false || true
// true

console.log(
  '2 * 2 / 2 == "1" || 5 * 5 === 25 >>>',
  (2 * 2) / 2 == '1' || 5 * 5 === 25
);

// 5 < 10 < 20
// true < 20
// 1 < 20
// true

// 5 + 10 + "Antanas" === "15Antanas"
// 15 + "Antanas" === "15Antanas"
// "15Antanas" === "15Antanas"
// true
console.log(
  '5 + 10 + "Antanas" === "15Antanas" ===',
  5 + 10 + 'Antanas' === '15Antanas'
);
