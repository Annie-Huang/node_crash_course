// const person = {
//     name: 'John Doe',
//     age: 30
// };
//
// module.exports = person;

// ##############################################

// What got wrapped around the class definitely is the following...
// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(__dirname, __filename);
// __dirname = D:\react\node_crash_course
// __filename = D:\react\node_crash_course\person.js

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

module.exports = Person;
