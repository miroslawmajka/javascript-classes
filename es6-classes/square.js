/* eslint-disable no-console */

const Rectangle = require('./rectangle');

class Square extends Rectangle {
    constructor(sideWidth) {
        super(sideWidth, sideWidth);
    }

    doAbstractStuff() {
        console.log(`Doing ${this.constructor.name} abstract method stuff...`);
    }

    // Not overriden
    static doStaticMethodStuff() {
        console.log('Doing Square static method stuff...');
    }
}

module.exports = Square;