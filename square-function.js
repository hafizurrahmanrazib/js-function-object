// square function without variable name declaration
let squaredNumber = Math.pow(5, 2);
console.log("5*5 = ", squaredNumber);

// square function with variable name declaration
let variable = 3;
let squaredNumber2 = Math.pow(variable, 2);
console.log("3*3 = ", squaredNumber2);

// function
function squareNumber(squareValue) {
    var square = Math.pow(squareValue, 3);
    return square;
}
var squareValue = 10;
var valueOfSquare = squareNumber(squareValue);
console.log('10*10*10:', valueOfSquare);
