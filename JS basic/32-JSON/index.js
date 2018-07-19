//JSON object
// 1. stringify - Convert an object to a JSON string
// 2. parse - Convert a JSON string to an object
var myDog = {name: 'Milu', age: 1, dead: false};
var myDogString = JSON.stringify(myDog);
console.log(myDogString);
console.log(typeof myDog);
// => JSON convert ca key va value trong 1 object thanh string

var myCatString = '{"name": "Tom", "age": 2, "dead": true}'; // phai dung nhay kep "_"
console.log('myCatString.name: ', myCatString.name); //chua phai la mot object
var myCat = JSON.parse(myCatString);
console.log('myCat.name:', myCat.name);

// --------------------
//Exercise (include 4 options):
//1. Show all students
//2. Create a new student
//3. Save & Continue
//4. Exit

console.log('\n\nOptions for you:\n 1. Show all students\n 2. Create a new student\n 3. Save & Continue \n 4. Exit\n');

var readlineSync = require('readline-sync'); // use npm
var fs = require('fs'); // use nodeJS

var listStudent = [];
var listStudentString = fs.readFileSync('./data.json', { encoding: 'utf-8'});
listStudent = JSON.parse(listStudentString); // listStudent la mot array

while (true) {

	var option = parseInt(readlineSync.question('Invite you to choose: '));

	//1. save to ./data.json > fs.readFileSync > JSON parse

	if (option === 1) {
		// show all student
		
		console.log('List of student:\n');
		numberOfStudent = listStudent.length;
		for (var i = 0; i < numberOfStudent; i++) {
			console.log(i + 1, listStudent[i]);
		}

	} else if (option === 2) {
		// create a new student
		console.log('Input information of new student:\n ');

		var name = readlineSync.question('Nhap ten:');
		var age = readlineSync.question('Nhap tuoi:');
		var gender = readlineSync.question('Nhap gioi tinh:');
		
		var student = {};
		student.name = name;
		student.age = parseInt(age);
		student.gender = gender;

		listStudent.push(student);	

	} else if (option === 3) {
		// save into file data.json

		listStudentString = JSON.stringify(listStudent);
		fs.writeFileSync('./data.json', listStudentString, { encoding: 'utf-8' });
		console.log('Saved!');

	} else if (option === 4) {
		break; // exit

	} else {
		console.log('Please choose a correct option above!');
	}
}