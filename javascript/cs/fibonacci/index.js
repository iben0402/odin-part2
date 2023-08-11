function fibs(number) {
    let fibsArray = [];
    fibsArray.push(0);
    fibsArray.push(1);
    for (let index = 2; index < number; index++) {
        fibsArray.push(fibsArray[index - 1] + fibsArray[index - 2]);
    }
    return fibsArray;
}

function fibsRec(x) {
    if (x <= 0) {
        return [];
    } else if (x === 1) {
        return [0];
    } else if (x === 2) {
        return [0, 1];
    } else {
        const fibsArray = fibsRec(x - 1);
        const nextFib = fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2];
        fibsArray.push(nextFib);
        return fibsArray;
    }
}

console.log(fibs(8));
console.log(fibsRec(8));