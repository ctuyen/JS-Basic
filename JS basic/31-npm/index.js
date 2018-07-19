// npm - node package manager

var readlineSync = require('readline-sync');

// Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

// var languages = [];

// var language = readlineSync.question('What is your mother language?');
// languages.push(language);
// var language = readlineSync.question('What language can you speak?');
// languages.push(language);
// console.log(languages);

var pet = {};
pet.name = readlineSync.question('name: ');
var weight = readlineSync.question('weight: ');

//pet.name = name;
pet.weight = parseInt(weight);

console.log(pet);