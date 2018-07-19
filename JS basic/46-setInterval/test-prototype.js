function Wife() {
	this.cook = function() {
		console.log('cook noodle');
	}
}

var wife = new Wife();
wife.cook();

Object.prototype.makeSandwich = function() {
	console.log('sudo make a sandwich');
}

wife.makeSandwich(); //sudo make a a sandwich

for(var skill in wife) {
	console.log(skill);
}

var ngocngoc = Object.create(null); //khong ke thua (not inheritance)

Object.prototype.karate = function() {
	console.log('dung khi di nhau khuya');
}

//ngocngoc.karate();
for (skill in ngocngoc) {
	console.log(skill);
}
