/* eslint-disable no-console */

const parent = require('./parent-class');

function ChildClass(input1) {
    parent.call(this, input1);

    this.input2 = `child input: ${input1}`;

    this.printStuff = () => console.log('Print Child Stuff');
    this.printBurgerList = () => console.log('Print Burger List');
}

ChildClass.prototype = Object.create(parent);

module.exports = ChildClass;