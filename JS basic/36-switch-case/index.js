

var myCard = {
	tier: 'silver'
}

function getTotal(price, memberCard) {
	var total, discount;

	switch (memberCard.tier) {
		case 'bronze':
			discount = 0.02;
			break;
		case 'silver':
			discount = 0.05;
			break;
		case 'gold':
			discount = 0.08;
			break;
		case 'diamond':
			discount = 0.1;
			break;
		default:
			console.log('Undifined');
			//break;
	}

	return price * (1 - discount);
}

console.log('Tong hoa don: ', getTotal(500000, myCard));