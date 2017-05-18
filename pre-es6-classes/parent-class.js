'use strict';

function ParentClass(input1) {
    this.input1 = `parent input: ${input1}`;

    this.printStuff = () => console.log('Print Parent Stuff');
    this.printMealList = () => console.log('Print Meal List');
}

module.exports = ParentClass;