const add = function(a, b) {
	return +a + +b;
};

const subtract = function(a, b) {
	return +a - +b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num , 0);
};

const multiply = function(arr) {
 return arr.reduce((total, num) => total * num, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  // n! = n * (n-1)!
	let a = 1;

  for (let i = 2; i <= num; i++) {
    a = i * a;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
