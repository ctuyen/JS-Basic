
// //Example 1: Toss a coin
// function tossCoin() {
// 	var value = Math.random();
// 	console.log(value);

// 	if (value < 0.5) {
// 		console.log('Mat sap');
// 	} else {
// 		console.log('Mat ngua');
// 	}
// }

// tossCoin();

// //example 2: app nen hay khong nen
// function shouldIDateHer() {
// 	var value = Math.random();
// 	//console.log(value);

// 	if (value < 0.5) {
// 		console.log('No, she has a boyfriend');
// 	} else {
// 		console.log('Yes, right now!');
// 	}
// }

// shouldIDateHer();

//example 3: may dem tien gia
function countbills(bills) {
	var total = 0;

	for (var bill of bills) {
		if (!bill.fake) {
			total += bill.value;
		}
		else {
			console.log('fake bill', bill);
			total = 0;
			break; //thoat for loop
		}
	}

	return total;
}

function test(bills) {
	for (var bill of bills) {
		console.log(bill.fake);
	}
}

var bills = [
	{ value: 10000, fake: false},
	{ value: 20000},
	{ value: 50000, fake: true},
	{ value: 100000}
];

var total = countbills(bills);
console.log(total);
test(bills);