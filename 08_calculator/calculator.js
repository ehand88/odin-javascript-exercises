const add = function() {
  let args = Array.from(arguments);
	return args.reduce((a,b) => a + b);
};

const subtract = function() {
	let args = Array.from(arguments);
	return args.reduce((a,b) => a - b);
};

const sum = function() {
  let arg = arguments[0];
  if (!Array.isArray(arg) || !arg.length) {
    return 0;
  }

	return arg.reduce((a,b) => a + b);
};

const multiply = function() {
  let arg = arguments[0];
  if (!Array.isArray(arg) || !arg.length) {
    return 0;
  }

	return arg.reduce((a,b) => a * b);
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
	let arg = arguments[0];
  let total = 1;

  while (arg > 0) {
    total *= arg;
    arg--;
  }

  return total;

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
