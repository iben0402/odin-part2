const capitalize = require('./functions').capitalize;
const reverseString = require('./functions').reverseString;
const calculator = require('./functions').calculator;
const caesarCipher = require('./functions').caesarCipher;
const anylizeArray = require('./functions').anylizeArray;

test('capitalize string: hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalize string: hello world', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

test('reverse string: hello', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverse string: hello world', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('calculator add: 1 + 2 to equal 3', () => {
    expect(calculator().add(1, 2)).toBe(3);
});

test('calculator subtract: 1 - 2 to equal -1', () => {
    expect(calculator().subtract(1, 2)).toBe(-1);
});

test('calculator multiply: 1 * 2 to equal 2', () => {
    expect(calculator().multiply(1, 2)).toBe(2);
});

test('calculator divide: 1 / 2 to equal 0.5', () => {
    expect(calculator().divide(1, 2)).toBe(0.5);
});

test('caesar cipher: hello world', () => {
    expect(caesarCipher('hello world', 1)).toBe('ifmmp xpsme');
});

test('anylize array: [1, 2, 3, 4, 5]', () => {
    expect(anylizeArray([1, 2, 3, 4, 5])).toEqual({
        sum: 15,
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});
