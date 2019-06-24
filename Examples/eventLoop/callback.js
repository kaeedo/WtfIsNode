function double(input, callback) {
    const double = input * 2;
    setImmediate(() => callback(double));
}

let result;

double(2, (doubled) => result = doubled);

console.log(result);

console.log();

// double(2, (doubled) => {
//     console.log(result);
//     result = doubled;
//     console.log(result);
// });
