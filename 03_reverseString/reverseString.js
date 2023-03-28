const reverseString = function(string) {
    const array = string.split("");
    let newArray = array.reverse();
    let newString = newArray.join("");
    return newString;
};


// Do not edit below this line
module.exports = reverseString;
