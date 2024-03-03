function removeCharsFromString(inputString, charsToRemove) {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        if (!charsToRemove.includes(inputString[i])) {
            result += inputString[i];
        }
    }

    return result;
}

let inputString = prompt("Enter the string:");
let charsToRemove = prompt(`Enter the characters to delete (separated by a comma):(inputed data:${inputString})`).split(',');
let result = removeCharsFromString(inputString, charsToRemove);

console.log("The initial string:", inputString);
console.log("Characters to remove:", charsToRemove);
console.log("Result:", result);