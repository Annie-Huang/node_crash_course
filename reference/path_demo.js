const path = require('path');

// Base file name:
console.log(__filename);
// Print D:\react\node_crash_course\reference\path_demo.js

console.log(path.basename(__filename));
// Print path_demo.js


// Directory name:
console.log(path.dirname(__filename));
// Print: D:\react\node_crash_course\reference

// File extension:
console.log(path.extname(__filename));
// Print .js


// Create path object
console.log(path.parse(__filename));
// { root: 'D:\\',
//     dir: 'D:\\react\\node_crash_course\\reference',
//     base: 'path_demo.js',
//     ext: '.js',
//     name: 'path_demo' }

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
// ./test/hello.html
// Print: D:\react\node_crash_course\reference\test\hello.html



