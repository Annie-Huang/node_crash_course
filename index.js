// CommonJS syntax.
const Person = require('./person');

// AMD syntax:
// require(['./printmodule'], function(printModule){
//    printModule.printMessage('Hello Amd');
// });

// Node has been use this yet, if you want to use the following ES6 syntax you will need to use babel
// import Person from './person';

const person1 = new Person('John Doe', 30);

person1.greeting();
