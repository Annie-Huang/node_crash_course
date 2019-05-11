// // CommonJS syntax.
// const Person = require('./person');
//
// // AMD syntax:
// // require(['./printmodule'], function(printModule){
// //    printModule.printMessage('Hello Amd');
// // });
//
// // Node has been use this yet, if you want to use the following ES6 syntax you will need to use babel
// // import Person from './person';
//
// const person1 = new Person('John Doe', 30);
//
// person1.greeting();

// -----------------------------------------------------

// const Logger = require('./logger');
//
// const logger = new Logger();
//
// logger.on('message', (data) => console.log('Called Listener', data));
//
// logger.log('Hello World');
// logger.log('Hi');
// logger.log('Hello');

// -----------------------------------------------------

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
