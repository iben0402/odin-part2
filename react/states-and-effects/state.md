# State
## What is state in React?
State is a JavaScript object that stores a component's dynamic data and determines the component's behavior. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive.

## useState Hook
The useState hook is a function that takes in a single argument, the initial state, and returns an array containing two values: the current state and a function that updates it. The useState hook is a named export from the react package.

```jsx
const [backgroundColor, setBackgroundColor] = useState(initialColor);
```

## Hooks
Hooks are functions that let you use React features. All hooks are recognizable by the use prefix. For example, useState is a hook. We’ll use more of these as we get further into the course. For now, remember that hooks have rules that we need to abide by:

1. Hooks can only be called from the top level of a functional component.
2. Hooks can’t be called from inside loops or conditions.

## How to structure state
**State is immutable**

Example:
```jsx
function Person() {
   const [person, setPerson] = useState({ name: 'John', age: 100 });

   // BAD - Don't do this!
   const handleIncreaseAge = () =>{
      // mutating the current state object
      person.age = person.age + 1;
      setPerson(person);
   }

   // GOOD - Do this!
   const handleIncreaseAge = () =>{
      // copy the existing person object into a new object 
      // while updating the age property
      const newPerson = { ...person, age: person.age + 1 };
      setPerson(newPerson);
   }
   
   return (
      <>
         <h1>{person.name}</h1>
         <h2>{person.age}</h2>
         <button onClick={handleIncreaseAge}>Increase age</button>
      </>
   )
}
```
