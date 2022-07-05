const ftoc = function(inputTemp) {
  let convertedTemp = (inputTemp - 32) * 5 / 9;
  convertedTemp = Math.round((convertedTemp + Number.EPSILON) * 10) / 10;
  return convertedTemp;
};

const ctof = function(inputTemp) {
  let convertedTemp = inputTemp * 9 / 5 + 32;
  convertedTemp = Math.round((convertedTemp + Number.EPSILON) * 10) / 10;
  return convertedTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
