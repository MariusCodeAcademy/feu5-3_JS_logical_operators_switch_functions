'use strict';
console.log('age.js file was loaded');

// gaunam amziu i kintamaji,
// jei amzius yra 0-17 - nesuauges
// jei amzius yra 18-200 - suauges
// jei amzius yra maziau uz 0 arba daugiau uz 200, arba amzius nera skaicius tai neteisingai ivestas amzius

let age = '15';

// 0 < age > 200

if (age < 0 || age > 200 || typeof age !== 'number') {
  console.log('netinkamai ivestas amzius');
} else if (age < 18) {
  // reiskia skaicius yra daugiau uz 0 ir maziau uz 200
  console.log('nesuauges');
} else {
  console.log('suauges');
}
