function calculateNumericAverage(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
            count++;
        }
    }

    if (count === 0) {
        return "There are no numeric elements in the array";
    }

    return sum / count;
}



let tmpArray = [1, 2, 'a', 'b', 3, {}, 'hello', 15, 'c', 4];
console.log(calculateNumericAverage(tmpArray));