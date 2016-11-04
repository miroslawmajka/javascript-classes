'use strict';

const ParentClass = require('./parent-class');
const ChildClass = require('./child-class');
const BabyClass = require('./baby-class');

module.exports = (module, ) => {
    const Class = require(module);

    return new Class();
};