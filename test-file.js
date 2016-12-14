var Shape = require('./Shape.js');
var Triangle = require('./Triangle.js');
var Square = require('./Square.js');
var Pentagon = require('./Pentagon.js');

// Let's give it a whirl...
var triangle = new Triangle(1, 2, 3);
var square = new Square(4);
var pentagon = new Pentagon(1, 2, 3, 4, 5);
var shape = new Shape();

// Ensuring everything delegates to Shape...
console.log(triangle.get_type());
console.log(square.get_type());
console.log(pentagon.get_type());
console.log(shape.get_type());

console.log('-'.repeat(24));

// Ensuring instanceof works as expected.
console.log(triangle instanceof Triangle);
// should also be an instanceof shape. Let's check that.
// Would also work for square and pentagon.
console.log(triangle instanceof Shape);
console.log(square instanceof Square);
console.log(pentagon instanceof Pentagon);
console.log(shape instanceof Shape);