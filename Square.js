var Shape = require('./Shape.js')



function Square (sideLength) {
	
	Shape.constructor.call(this)
	this.sideLength = sideLength;
}
// set it equal to a new shape.
Square.prototype = new Shape();
// set the constructor to Square. So get_type pulls Square.
Square.prototype.constructor = Square;

// function inherits(subC, superC) {
// 	var subProto = Object.create(superC.prototype);
// 	// extend(subProto, subC.prototype);
// 	subC.prototype = subProto;
// };
// inherits(Square, Shape)

module.exports = Square;