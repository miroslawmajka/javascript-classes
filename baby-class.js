'use strict';

const child = require('./child-class');

function BabyClass(input1) {
    child.call(this,input1);

    this.input3 = `baby input: ${input1}`;

    this.printStuff = () => console.log('Print Baby Stuff');
    this.printChickenBurgerList = () => console.log('Print Chicken Burger Stuff');
}

BabyClass.prototype = Object.create(child);

module.exports = BabyClass;