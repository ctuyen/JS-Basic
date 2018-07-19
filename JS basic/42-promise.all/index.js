
var fs = require('fs');

function readFilePromise(path) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path, { encoding: 'utf8'}, function(err, data){
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});	
	});
}

//promise.all return 1 promise nen co .then
Promise.all([
	readFilePromise('./song1.txt'),
	readFilePromise('./song2.txt'),
	readFilePromise('./song3.txt')  // promise.all dc resolve khi ca 3 prosime nay deu duoc resolve
]).then(function(values) {
	console.log(values); // 1 array tong hop ket qua
}).catch(function (error) {
	console.log(error);
});

