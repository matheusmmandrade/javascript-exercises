const sumAll = function(firstNumber, lastNumber) {

    if(firstNumber < 0  || typeof(firstNumber) !== 'number' || typeof(lastNumber) !== 'number') return "ERROR";

    let lowerNumber = Math.min(firstNumber, lastNumber);
    let biggerNumber = Math.max(firstNumber, lastNumber);

    let sum = 0;
    for(let i = lowerNumber; i <= biggerNumber; i++){
        sum = sum + i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
