"use strict";

/* function takes in a number and returns array of number's divisors */
function allDivisors(num) {
    let lowerDivisors = [];
    let upperDivisors = [];

    //Check if number is a positive whole integer
    if (num <= 0 || !(Number.isInteger(num))) return 'Please provide a positive, whole number.'

    //Find all divisor pairs
    for (let i = 1; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            lowerDivisors.push(i);
            upperDivisors.unshift(num / i);
        }
    }

    //If square root is a whole number, add to divisor array. 
    if (Number.isInteger(Math.sqrt(num))) lowerDivisors.push(Math.sqrt(num));

    return [...lowerDivisors, ...upperDivisors];

}