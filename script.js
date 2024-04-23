//complete this code
function Rectangle(width,height) {
	this._width = width;
	this._height = height;

	Object.defineProperty(this,'width',{
		get:function () {
			return this._width;
		}
	});
	Object.defineProperty(this,'height',{
		get:function () {
			return this._height;
		}
	});
}

Rectangle.prototype.getArea = function () {
	return this._width*this._height;
}


function Square(params) {
	Rectangle.call(this,params,params);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.getPerimeter = function () {
	return 2*(this._width+this._height);
}


// const rectangle = new Rectangle(5, 10);
// console.log(rectangle.width); // Output: 5
// console.log(rectangle.height); // Output: 10
// console.log(rectangle.getArea()); // Output: 50

// const square = new Square(7);
// console.log(square.width); // Output: 7
// console.log(square.height); // Output: 7
// console.log(square.getArea()); // Output: 49
// console.log(square.getPerimeter()); // Output: 28
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
