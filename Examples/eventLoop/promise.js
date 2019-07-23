const fs = require('fs');
const path = require('path');

const firstFileName = './supportFiles/1.txt';

new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, firstFileName), { encoding: 'utf-8' }, (err, data) => err ? reject(err) : resolve(data.trim()));
})
.then((response) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, response), { encoding: 'utf-8' }, (err, data) => err ? reject(err) : resolve(data.trim()));
    })
})
.then((response) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, response), { encoding: 'utf-8' }, (err, data) => err ? reject(err) : resolve(data.trim()));
    })
})
.then((response) => {
    console.log(response)
})
.catch(console.log);

// const betterReadFile = (file) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path.join(__dirname, file), { encoding: 'utf-8' }, (err, data) => err ? reject(err) : resolve(data.trim()));
//     });
// }

// betterReadFile(firstFileName)
//     .then(betterReadFile)
//     .then(betterReadFile)
//     .then(console.log)
//     .catch((error) => console.log(error));
