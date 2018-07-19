
//syntax: 
// condition ? express while true : express while false

function tossACoin() {
	var value = Math.random();

	var result = (value < 0.5) ? 'mat sap' : 'mat ngua';

	// if (value < 0.5) {
	// 	console.log('Mat sap');
	// } else {
	// 	console.log('Mat ngua');
	// }

	console.log(result);
}

tossACoin();