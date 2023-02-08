'use strict';
console.log('truthty_falsey.js file was loaded');

// Falsy - reiksmes kurios skaitomos kaip false
// tuscios reiksmes

console.log("Boolean('') ===", Boolean(''));
console.log('Boolean(0) ===', Boolean(0));
console.log('Boolean(null) ===', Boolean(null));
console.log('Boolean(undefined) ===', Boolean(undefined));
console.log('Boolean(NaN) ===', Boolean(NaN));

// Truthy yra ne tusccios reiskmes
//
console.log("Boolean(' ') ===", Boolean(' '));
console.log("Boolean('false') ===", Boolean('false'));
console.log("Boolean('0') ===", Boolean('0'));
console.log("Boolean('{}') ===", Boolean({}));
console.log("Boolean('[]') ===", Boolean([]));
console.log('Boolean(-50) ===', Boolean(-50));
