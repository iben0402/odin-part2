function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function calculator() {
    return {
        add: function add(a, b) {
        return a + b;
        },
        subtract: function subtract(a, b) {
        return a - b;
        },
        multiply: function multiply(a, b) {
        return a * b;
        },
        divide: function divide(a, b) {
        return a / b;
        }
    };
}

function caesarCipher(str, shift) {
    return str
        .split("")
        .map(char => shiftChar(char, shift))
        .join("");
}

function shiftChar(char, shift) {
    const code = char.charCodeAt();
    if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }
    if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    return char;
}

function anylizeArray(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr);
    let average = sum / arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;
    return {
        sum,
        average,
        min,
        max,
        length
    };
}

module.exports = {capitalize, reverseString, calculator, caesarCipher, anylizeArray};