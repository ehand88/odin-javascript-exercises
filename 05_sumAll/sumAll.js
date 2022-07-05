const sumAll = function(num1,num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

    let args = Array.from(arguments);
    let start = Math.min(...args);
    let end = Math.max(...args);
    let sumTotal = 0;

    for (start; start <= end; start++) {
        sumTotal += start;
    }

    return sumTotal;

};

// Do not edit below this line
module.exports = sumAll;
