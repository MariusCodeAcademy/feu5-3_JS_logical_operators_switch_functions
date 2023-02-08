'use strict';
console.log('login.js file was loaded');

/*
## 5. Parašykite programą, kuri:

- Paprašyti įvesti prisijungimo vardą ir slaptažodį
- Jei vardas admin, slaptažodis turi būti “master”
- Jei vardas ne admin - tai slaptažodis yra: vardas ir skaičius 11.
  Pvz.: username: andrius, psw: andrius11
- “Sveiki, admin” arba “Neteisingas slaptažodis”
- Jei neiįvedė nieko - “Viso gero!”

user 
pass

1
user === admin
pass === master

“Sveiki, admin”

2
user === jane
pass === jane11

“Sveiki, jane"

*/

let username = 'admin';
let password = 'master';

username = prompt('username');
password = prompt('password');
console.log('username ===', username);

if (username === '' || username === null) {
  console.log('nieko neivesta');
} else if (username === 'admin' && password === 'master') {
  console.log('Sveiki, admin');
} else if (password === `${username}11`) {
  console.log(`Sveiki, ${username}`);
} else {
  console.log('neteisingas slaptazodis');
}
