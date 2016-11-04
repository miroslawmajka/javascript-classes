'use strict';

const privateModule = require('./private-module');
const objectLiteral = require('./object-literal');

const print = console.log;

print('\nPRIVATE MODULE');
privateModule.print1();
privateModule.print2();

objectLiteral.print1();
objectLiteral.print2();

const ParentClass = require('./parent-class');
const ChildClass = require('./child-class');
const BabyClass = require('./baby-class');

const parentClass = new ParentClass('a');
const childClass = new ChildClass('b');
const babyClass = new BabyClass('c');

print('\nPARENT');
parentClass.printStuff();
parentClass.printMealList();
try {
    parentClass.printBurgerList();
} catch(err) {
    console.error(err);
}

print('\nCHILD');
childClass.printStuff();
childClass.printMealList();
childClass.printBurgerList();
try {
    childClass.printChickenBurgerList();
} catch(err) {
    console.error(err);
}

print('\nBABY');
babyClass.printStuff();
babyClass.printMealList();
babyClass.printBurgerList();
babyClass.printChickenBurgerList();

print('\nPARENT PROPERTIES');
parentClass.parentProp1 = 'value 1';
print(parentClass.parentProp1);
print(childClass.parentProp1);
print(babyClass.parentProp1);

print('\nCHILD PROPERTIES');
childClass.parentProp2 = 'value 2';
print(parentClass.parentProp2);
print(childClass.parentProp2);
print(babyClass.parentProp2);

print('\nPARENT');
print(parentClass.input1);
print(parentClass.input2);
print(parentClass.input3);

print('\nCHILD');
print(childClass.input1);
print(childClass.input2);
print(childClass.input3);

print('\nBABY');
print(babyClass.input1);
print(babyClass.input2);
print(babyClass.input3);