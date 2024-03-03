function fillArrayWithUserInput(rows, cols) {
    let array = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            let userInput = parseFloat(prompt(`Enter a value for the element [${i}][${j}]:`));
            row.push(userInput);
        }
        array.push(row);
    }

    return array;
}

let rows = parseInt(prompt("Enter the number of rows:"));
let cols = parseInt(prompt("Enter the number of columns:"));

let userArray = fillArrayWithUserInput(rows, cols);

console.log("Filled array:", userArray);