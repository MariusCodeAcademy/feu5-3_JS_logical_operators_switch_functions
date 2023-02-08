'use strict';
console.log('ilgis.js file was loaded');

/*
4. Parašykite variable su jūsų vardu. Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name". (string lenght)
*/

let uName = 'Serbentautas';
// uName = prompt('your name is?');
console.log('uName.length ===', uName.length);

let nameResult = uName.length <= 5 ? 'Short Name' : 'Long Name';

console.log('nameResult ===', nameResult);
