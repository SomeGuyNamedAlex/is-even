const isOdd = require('is-odd');

module.exports = function isEven(n) {
    return !isOdd(n);
}