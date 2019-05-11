const http = require('http');

// Create server object
http
    .createServer((req, res) => {
        // Write response
        res.write('Hello World');
        res.end();
    })
    .listen(5000, () => console.log('Server running...')); // 5000 is the port number
