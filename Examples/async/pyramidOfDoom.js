const fs = require('fs');

const basePath = './Examples/async/supportFiles/';
const firstFileName = '1.txt';
let nextFile = '';

fs.readFile(basePath + firstFileName, { encoding: 'utf-8' }, (err, data) => {
    const contents = data.trim();
    console.log('Contents of first file are: ', contents);
    nextFile = contents;
});

fs.readFile(basePath + nextFile, { encoding: 'utf-8' }, (err, data) => {
    const contents = data.trim();
    console.log('Contents of second file are: ', contents);
    nextFile = contents;
});




// fs.readFile(basePath + firstFileName, { encoding: 'utf-8' }, (err, data) => {
//     const contents = data.trim();
//     console.log('Contents of first file are: ', contents);

//     fs.readFile(basePath + contents, { encoding: 'utf-8' }, (err, data) => {
//         const contents = data.trim();
//         console.log('Contents of second file are: ', contents);

//         fs.readFile(basePath + contents, { encoding: 'utf-8' }, (err, data) => {
//             const contents = data.trim();
//             console.log('Contents of third file are: ', contents);
//         });
//     });
// });
