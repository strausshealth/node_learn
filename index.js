const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'CRUD');
const filePath = path.join(dirPath, 'input.txt');

// Creat file
// fs.writeFileSync(filePath, 'this is text');

// Read file
// fs.readFile(filePath,'utf8', (err, item) => {
//     console.log(item)
// })

// Update File
// fs.appendFile(filePath, ' the new text is here', (err) => {
//     if (!err) console.log('File updated')
// })

// Rename file
// fs.rename(filePath, `${dirPath}/new_input.txt`, (err) => {
//     if (!err) console.log("File name is updated")
// })

// Delete file
// fs.unlinkSync(`${dirPath}/new_input.txt`);