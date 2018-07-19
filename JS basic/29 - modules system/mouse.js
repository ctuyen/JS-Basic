function Mouse(color) {
	this.color = color;
	this.dead = false;
}

Mouse.prototype.die = function() {
	this.dead = true;
}

module.exports = Mouse;  //ham require tra ve Mouse duoc export o day.