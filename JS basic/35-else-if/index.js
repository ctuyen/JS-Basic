//else..if : dung neu co 3 truong hop tro len

// Example: calculator bus ticket fee
function getTicketFee (person) {
	var basePrice = 6000;

	if (person.age < 22) {
		return basePrice * 0.6; // discount price
	} else if (person.age > 60) {
		return basePrice * 0.8;
	} else {
		return basePrice;
	}
}

var person = {
	age: 16   // in object don't use ';'
}

var fee = getTicketFee(person);
console.log(fee);

