'use strict';
console.log('kelintadienis.js file was loaded');

let day = 8;
// day = +prompt('kelintadienis');
// gauti dienos skaiciu is sistemos
day = new Date().getDay();
let kelintadienis;

switch (day) {
  case 1:
    console.log('Pirmadienis');
    kelintadienis = 'Pirmadienis';
    break;
  case 2:
    console.log('Antradienis');
    kelintadienis = 'Antradienis';
    break;
  case 3:
    kelintadienis = 'Treciadienis';
    break;
  case 4:
    kelintadienis = 'Ketvirtadienis';
    break;
  case 5:
  case 6:
  case 7:
    kelintadienis = 'Savaitgalis';
    break;
  default:
    kelintadienis = 'neteisingai ivesta diena, prasom vesti nuo 1 iki 7';
}

document.getElementById('app').textContent = `siandien yra ${kelintadienis}`;
