const fibonacci = function(num) {
    let a = 0;
    let b = 1;

    if (+num === 0) return 0;
    else if (+num < 0) return "OOPS";

    for (let i = 2; i <= +num; i++) {
        // xn = xn−1 + xn−2
        [a, b] = [b, a+b];
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
