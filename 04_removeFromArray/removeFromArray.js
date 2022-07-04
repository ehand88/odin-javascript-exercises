const removeFromArray = function() {
let inputArray = arguments[0];
let outputArray = [];
let elementsToRemove = Array.prototype.slice.call(arguments,1);
let flag = true;


for (const input of inputArray) {
    for (const element of elementsToRemove) {
        if (input === element) {
            flag = false;
            break;
        }
    }
    if (flag) { outputArray.push(input) };
    flag = true;
}
return outputArray;

};

removeFromArray([1, 2, 3, 4], 3,4);

// Do not edit below this line
module.exports = removeFromArray;
