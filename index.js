const http = require('http');
const data = require('./data');

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'applicatio\json' });
    // resp.write(JSON.stringify({ name: 'Gaurang', email: 'gmail@email.com' }));
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4500);