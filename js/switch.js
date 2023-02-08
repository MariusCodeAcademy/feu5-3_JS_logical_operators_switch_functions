'use strict';
console.log('switch.js file was loaded');
// if else varijantas
{
  console.group('if else varijantas');

  let myVar = null;

  if (typeof myVar === 'number') {
    console.log(`kintamasis ${myVar} yra skaiciaus tipo`);
  } else if (typeof myVar === 'string') {
    console.log(`kintamasis ${myVar} yra stringo tipo`);
  } else if (typeof myVar === 'boolean') {
    console.log(`kintamasis ${myVar} yra boolean tipo`);
  } else {
    console.log('kazkas ne taip, bandyti veliau dar karta');
  }

  console.groupEnd();
}
// switch varijantas
{
  console.group('switch varijantas');
  let myVar;
  console.log('myVar ===', myVar);

  switch (typeof myVar) {
    case 'number':
      // atvejis kai typeof myVar === 'number'
      console.log(`kintamasis ${myVar} yra skaiciaus tipo`);
      break;
    case 'string':
      console.log(`kintamasis ${myVar} yra stringo tipo`);
      break;
    case 'boolean':
      console.log(`kintamasis ${myVar} yra boolean tipo`);
      break;
    default:
      console.log('kazkas ne taip, bandyti veliau dar karta');
  }

  console.groupEnd();
}
