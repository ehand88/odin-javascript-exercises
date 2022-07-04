const reverseString = function(input) {
  let output = ''

  for (char of input) {
    output = char + output;
  }

  return output;
};

// Do not edit below this line
module.exports = reverseString;
