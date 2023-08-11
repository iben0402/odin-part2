# Keys
## Why use keys?
When the list is updated for whatever reason, (either from a server or a user interaction), React matches the keys of each of the previous list to the updated list. If there were any changes, React will only update the items that have changed.

As long as keys remain consistent and unique, React can handle the DOM effectively and efficiently.

## How to use keys?
```jsx
<Component key={keyValue} />
//or
<div key={keyValue} />
```

## What should I use as a key?
```jsx
// a list of todos, each todo object has a task and an id
const todos = [
  { task: "mow the yard", id: uuid() }, 
  { task: "Work on Odin Projects", id: uuid() },
  { task: "feed the cat", id: uuid() },
];

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        // here we are using the already generated id as the key.
        <li key={todo.id}>{todo.task}</li>
        // but NEVER do key={uuid()}!!!!!
      ))}
    </ul>
  ) 
}
```

