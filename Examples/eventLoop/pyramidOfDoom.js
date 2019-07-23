const fs = require('fs');
const path = require('path');

const firstFileName = path.join(__dirname, './supportFiles/1.txt');
let nextFile = '';

fs.readFile(firstFileName, { encoding: 'utf-8' }, (err, data) => {
    const contents = data.trim();
    console.log('Contents of first file are: ', contents);
    nextFile = path.join(__dirname, contents);
});

fs.readFile(nextFile, { encoding: 'utf-8' }, (err, data) => {
    const contents = data.trim();
    console.log('Contents of second file are: ', contents);
    nextFile = path.join(__dirname, contents);
});




// fs.readFile(firstFileName, { encoding: 'utf-8' }, (err, data) => {
//     const contents = data.trim();
//     console.log('Contents of first file are: ', contents);

//     fs.readFile(path.join(__dirname, contents), { encoding: 'utf-8' }, (err, data) => {
//         const contents = data.trim();
//         console.log('Contents of second file are: ', contents);

//         fs.readFile(path.join(__dirname, contents), { encoding: 'utf-8' }, (err, data) => {
//             const contents = data.trim();
//             console.log('Contents of third file are: ', contents);
//         });
//     });
// });
