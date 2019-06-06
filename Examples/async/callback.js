function someJob(input, callback) {
    const double = input * 2;
    setImmediate(() => callback(double));
}

let afterJob = 0;
console.log(someJob(2, (doubled) => afterJob = doubled));

// console.log();

// someJob(2, (doubled) => {
//     console.log(afterJob);
//     afterJob = doubled;
//     console.log(afterJob);
// });
