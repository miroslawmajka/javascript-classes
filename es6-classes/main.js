const Rectangle = require('./rectangle');
const Square = require('./square');

const rectangle = new Rectangle(10, 20);
const square = new Square(30);

rectangle.showArea();
square.showArea();
rectangle.doParentMethodStuff();
square.doParentMethodStuff();
Rectangle.doStaticMethodStuff();
Square.doStaticMethodStuff();