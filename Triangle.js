var Shape = require('./Shape.js')


// This way also works! 
// function Triangle (firstSide, secondSide, thirdSide) {
// 	var name = this.name;
// 	this.constructor = Triangle;
// 	Shape.constructor.call(this, name)
// 	this.firstSide = firstSide;
// 	this.secondSide = secondSide;
// 	this.thirdSide = thirdSide;

// }

function Triangle(firstSide, secondSide, thirdSide) {
	Shape.apply(this, arguments);
	this.firstSide = firstSide;
	this.secondSide = secondSide;
	this.thirdSide = thirdSide;
}

Triangle.prototype = new Shape();

Triangle.prototype.constructor = Triangle;

// function inherits(subC, superC) {
// 	var subProto = Object.create(superC.prototype);
// 	// extend(subProto, subC.prototype);
// 	subC.prototype = subProto;
// };



// inherits(Triangle, Shape)

module.exports = Triangle;