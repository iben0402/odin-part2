# Factory Functions and the Module Pattern
## Factory functions
The factory function pattern is similar to constructors, but instead of using new to create an object, factory functions simply set up and return the new object when you call the function. Example:
```javascript
const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'
```

#### inheritence
```javascript
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return {sayName};
}

const Nerd = (name) => {
  const prototype = Person(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return Object.assign({}, prototype, {doSomethingNerdy});
}

const jeff = Nerd('jeff');

jeff.sayName(); // my name is jeff
jeff.doSomethingNerdy(); // nerd stuff
```

## The module pattern
The module pattern is a way of creating an enclosed scope that makes variables and functions private. Example:
```javascript
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476
```
