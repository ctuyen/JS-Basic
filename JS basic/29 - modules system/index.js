console.log('Coders.Tokyo');


var Mouse = require('./mouse.js'); // ./ la dia chi thu muc hien tai
var Cat = require('./cat'); //nhu mouse

var mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);	