/* eslint-disable no-console */

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    showArea() {
        const area = this.height * this.width;

        console.log(`${this.constructor.name} area: ${area}`);
    }

    doParentMethodStuff() {
        this.doAbstractStuff();

        console.log('Doing parent method stuff...');
    }

    doAbstractStuff() {
        console.log(`Doing ${this.constructor.name} abstract method stuff...`);
    }

    static doStaticMethodStuff() {
        console.log('Doing Rectangle static method stuff...');
    }
}

module.exports = Rectangle;