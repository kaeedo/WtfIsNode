const someDependency = {
    value: 'From commonJs module',
    add: (a, b) => a + b
};

// magic property that Node.js "returns" to the require function
module.exports = someDependency;
