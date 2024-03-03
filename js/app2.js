function doMath(x, znak, y) {
    if (isNaN(x) || isNaN(y)) {
        return 'Incorrect numbers entered';
    }

    let result;

    if (znak === '+') {
        result = x + y;
    } else if (znak === '-') {
        result = x - y;
    } else if (znak === '*') {
        result = x * y;
    } else if (znak === '/') {
        if (y !== 0) {
            result = x / y;
        } else {
            result = 'Division by zero is not possible';
        }
    } else if (znak === '%') {
        result = x % y;
    } else if (znak === '^') {
        if (Number.isInteger(y) && y >= 0) {
            result = 1;
            for (let i = 0; i < y; i++) {
                result *= x;
            }
        } else {
            result = 'The degree must be a non-negative integer';
        }
    } else {
        result = 'Unknown mathematical sign';
    }

    return result;
}

let x = parseFloat(prompt('Enter the first number:'));
let znak = prompt('Enter a mathematical sign (+, -, *, /, %, ^):');
let y = parseFloat(prompt('Enter the second number:'));

let result = doMath(x, znak, y);
console.log(`${x}${znak}${y}=${result}`);