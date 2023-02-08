'use strict';
console.log('salys.js file was loaded');

/* 
2. sukuriam kintamaji salis ir prilyginam vienam is europos saliu. Sukuriam palyginimo programa kuri pranestu:

   - BALTIJOS SALYS - jei salis yra Lietuva, Estija arba Latvija
   - Vakaru europa - jei salis yra UK, Prancuzija, Vokietija
   - Kitos Salys - jei salis yra neaprasyta pirmais 2 punktais
*/

let salis = 'Zimbabwe';

switch (salis) {
  case 'Lietuva':
  case 'Estija':
  case 'Latvija':
    console.log('BALTIJOS SALYS');
    break;
  case 'UK':
  case 'Prancuzija':
  case 'Vokietija':
    console.log('Vakaru Europa');
    break;
  default:
    console.log('Kitos salys');
}
