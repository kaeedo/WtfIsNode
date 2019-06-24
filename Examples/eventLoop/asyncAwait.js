const fs = require('fs');

const firstFileName = './supportFiles/1.txt';

const betterReadFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, { encoding: 'utf-8' }, (err, data) => err ? reject(err) : resolve(data.trim()));
    });
}

const readAllFiles = async (file) => {
    const firstFileContents = await betterReadFile(file);

    const secondFileContents = await betterReadFile(firstFileContents);

    const thirdFileContents = await betterReadFile(secondFileContents);

    return thirdFileContents;
}

readAllFiles(firstFileName)
    .then(console.log);


// Top level await is coming "soon"
