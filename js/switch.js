'use strict';
console.log('switch.js file was loaded');

{
  console.group('4. kokio tipo reiksme');

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
