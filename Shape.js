// var Shape = function (type ) {
// 	var this.type = type;
// 	this.get_type = function() {
// 		return type;
// 	}
// }

// module.exports = Shape;

// A standard constructor function.
function Shape () {
  this.type = 'shape';
}

// Attaching a prototype function.
Shape.prototype.get_type = function () {
    return this.constructor;
}

module.exports = Shape;