const http = require('http');

// http.createServer((req, resp) => {
//     resp.write('<h1>hello are u here</h1>');
//     resp.end();
// }).listen(4500);

// Normal function
// function data(req, resp) {
//     resp.write('<h1>hello are u here</h1>');
//     resp.end();
// }

// Aerro Function
const data = (req, resp) => {
    resp.write('<h1>hello 123 are u here</h1>');
    resp.end();
}
http.createServer(data).listen(4500);


// unother example of aerro and normal function
// function test(a) {
//     return a * 100;
// }

// const test = (a) => a * 100;
