# Side effects
## What are effects in React?
Effects are anything that affects something outside of the scope of the function being executed. In React, this means anything that affects the DOM, such as changing the document title and adding event listeners. In React, effects are managed by the `useEffect` hook.

## useEffect hook
The `useEffect` hook is used to manage side effects in React. It takes two arguments: a function and an array of dependencies. The function is the effect itself, and the array of dependencies is used to tell React when to run the effect. If the array of dependencies is empty, the effect will only run once, when the component is mounted. If the array of dependencies is not empty, the effect will run when the component is mounted, and whenever any of the dependencies change.

```jsx
import React, { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);
  })

  return (
    <p>{counter} seconds have passed.</p>
  );
}
```

## The dependency array
the second argument accepts an array of dependencies allowing the hook to re-render only when those dependencies are changed. So if you have a state variable and want to have some side-effect occur any time the state changes, you can use this hook and mention the state variable in the dependency array.

We pass an empty array in this example because we do not want the useEffect hook to run anytime other than the initial component render.
```jsx
import React, { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);
  }, [])

  return (
    <p>{counter} seconds have passed.</p>
  );
}
```

## Cleaning up effects
```jsx
import React, { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(key);
    }
  }, [])

  return (
    <p>{counter} seconds have passed.</p>
  );
}
```


# Summary
```jsx
useEffect(
  () => {
    // execute side effect
    return () => {
      // cleanup function on unmounting or re-running effect
    }
  },
  // optional dependency array
  [/* 0 or more entries */]
)
```

## When not to use useEffect
1. You do not need to use an effect if you are only calculating something based on the state during rendering. For a change in a component, due to a change in the props, you can simply calculate and set it during rendering.
2. You do not need effects for events. Code that runs when a component is displayed should be in effects, the rest should be in events.
3. You do not need an effect to reset the state based on a condition most of the time. You have learned about keys in React. Just like using a key on a list’s item, adding one to a component, based on the state on which it should be reset creates a unique version of that component for each change in the value of the state.


