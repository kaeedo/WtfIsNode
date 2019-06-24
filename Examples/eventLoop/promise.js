const fs = require('fs');

const firstFileName = './supportFiles/1.txt';

new Promise((resolve, reject) => {
    fs.readFile(firstFileName, { encoding: 'utf-8' }, (err, data) => err ? reject(err) : resolve(data.trim()));
})
.then((response) => {
    return new Promise((resolve, reject) => {
        fs.readFile(response, { encoding: 'utf-8' }, (err, data) => err ? reject(err) : resolve(data.trim()));
    })
})
.then((response) => {
    return new Promise((resolve, reject) => {
        fs.readFile(response, { encoding: 'utf-8' }, (err, data) => err ? reject(err) : resolve(data.trim()));
    })
})
.then((response) => {
    console.log(response)
})
.catch(console.log);

// const betterReadFile = (file) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(file, { encoding: 'utf-8' }, (err, data) => err ? reject(err) : resolve(data.trim()));
//     });
// }

// betterReadFile(firstFileName)
//     .then(betterReadFile)
//     .then(betterReadFile)
//     .then(console.log)
//     .catch((error) => console.log(error));
