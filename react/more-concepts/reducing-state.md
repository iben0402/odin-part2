# Reducing State
## What are reducers?
Reducers are functions that take a previous state and an action to return a new state.

## example
```jsx
function reducer(state, action) {
  switch (action.type) {
      case 'incremented_count': {
        return { count: state.count + 1 }
        }
      case 'decremented_count': {
          return { count: state.count - 1 }
        }
      case 'set_count': {
          return { count: action.value }
        }
      default: {
          throw error('unknown action: ' + action.type);
        }
    }
}
```
## when to use reducers?
Reducers are useful when you have a complex state that can be updated in different ways. For example, if you have a form with multiple fields, you can have a reducer for each field. This way, you can update the state of the form by dispatching actions to the reducers.

## useReducer hook
useReducer is a hook that allows you to use reducers in your components. It takes a reducer function and an initial state as arguments and returns a state and a dispatch function.

```jsx
const [state, dispatch] = useReducer(reducer, { count: 0 });

function handleClick() {
  dispatch({ type: 'incremented_count' });
}
```
