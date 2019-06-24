const fs = require('fs');

const firstFileName = './supportFiles/1.txt';
let nextFile = '';

fs.readFile(firstFileName, { encoding: 'utf-8' }, (err, data) => {
    const contents = data.trim();
    console.log('Contents of first file are: ', contents);
    nextFile = contents;
});

fs.readFile(nextFile, { encoding: 'utf-8' }, (err, data) => {
    const contents = data.trim();
    console.log('Contents of second file are: ', contents);
    nextFile = contents;
});




// fs.readFile(firstFileName, { encoding: 'utf-8' }, (err, data) => {
//     const contents = data.trim();
//     console.log('Contents of first file are: ', contents);

//     fs.readFile(contents, { encoding: 'utf-8' }, (err, data) => {
//         const contents = data.trim();
//         console.log('Contents of second file are: ', contents);

//         fs.readFile(contents, { encoding: 'utf-8' }, (err, data) => {
//             const contents = data.trim();
//             console.log('Contents of third file are: ', contents);
//         });
//     });
// });
