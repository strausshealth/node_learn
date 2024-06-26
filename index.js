const fs = require('fs');

// Get input from CMD use process.argv
const input = process.argv;

// fs.writeFileSync(input[2], input[3]);

if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
    console.log('File created ' + input[3]);
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3]);
    console.log('File deleted ' + input[3]);
} else {
    console.log('Invalid input');
}