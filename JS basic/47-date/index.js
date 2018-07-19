//Date
//moment.js
var moment = require('moment');

// var now = new Date();
// var myBirthday = new Date(1998, 4, 7); // 7/5/1998 

// // number of millisecond from 1-1-1970 GMT+7
// console.log(now.getTime());
// console.log(myBirthday.getTime());

var now = moment();
console.log(now);
var aDay = moment('2018-07-17 07-00');
console.log(aDay.fromNow());
console.log(aDay.format('YYYY/MM/DD'));