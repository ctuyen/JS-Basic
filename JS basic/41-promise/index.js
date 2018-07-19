var fs = require('promise-fs');

// fs.readFile('song1.txt', { encoding: 'utf8' }) //readFile tra ve 1 promise
//   .then(function(song1) {
//   	console.log(song1);
//   })
//   .catch(function(error) {
//   	console.log(error);
//   });
 // .then tra ve mot promise (chinh no)

//tach ham
 function onDone(song) {
 	console.log(song);
 }

 function onError(error) {
 	console.log(error);
 }

 function readFile(path) {
 	return fs.readFile(path, { encoding: 'utf8' }); //return promise
 }

 readFile('song1.txt')
 	.then(onDone)
 	.then(function() {
 		return readFile('song2.txt');
 	})
 	.then(onDone)
 	.catch(onError);


//
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

readFilePromise('song1.txt')
	.then(function(song1) {
		console.log(song1);
	})
	.catch(function(error) {
		console.log(error);
	});