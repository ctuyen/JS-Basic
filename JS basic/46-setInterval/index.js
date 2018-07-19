//setInterval(fn, ms);
// var i = 0;
// var intervalId = setInterval(function() {
// 	++i;
// 	console.log(i);
// 	if (i === 5) {
// 		clearInterval(intervalId);
// 	};
// }, 1000);


//write a function count from 1 to 10
// return a promise



//---------------------------------
function countFrom(a, b) {
    return new Promise(function(resolve, reject) {
        var intervalId = setInterval(function() {
            if ( a === (b + 1)) {
                resolve();
                clearInterval(intervalId);
            } else if ( a > b || typeof a !== 'number' || typeof b !== 'number') {
                reject(new Error('Wrong Input'));
                clearInterval(intervalId);
            } else {
                console.log(a);
                a++;
            }
        },1000);
    });
};

countFrom(1, 5)
 .then(function() {
     console.log('Done!');
 })
 .catch(function(err) {
     console.log(err + '');
 })
//  -----------------------------
// -resolve, reject co tac dung gi?
// -new Error() ??
// -