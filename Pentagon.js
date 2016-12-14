var Shape = require('./Shape.js')



function Pentagon (side1, side2, side3, side4, side5) {
	// .call or .apply. both work. 
	Shape.constructor.call(this)
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
}

Pentagon.prototype = new Shape();

Pentagon.prototype.constructor = Pentagon;

// function inherits(subC, superC) {
// 	var subProto = Object.create(superC.prototype);
// 	// extend(subProto, subC.prototype);
// 	subC.prototype = subProto;
// };
// inherits(Pentagon, Shape)

module.exports = Pentagon;