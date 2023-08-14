# Refs and Memoization
## useRef hook
The useRef hook lets you manage a value that’s not needed for rendering. They are an alternative to state, as when you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use this hook.
## DOM manipulation
Imagine a button on a web page, and you want to focus on that button when the page loads. You could achieve this using the useRef hook. Here’s how it works:
```jsx
import { useRef, useEffect } from "react";

function ButtonComponent() {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return <button ref={buttonRef}>Click Me!</button>;
}
```
## useMemo hook
The useMemo hook is used to memoize expensive functions so that you can avoid calling them on every render. It accepts a function and an array of dependencies. The function will only be called when one of the dependencies changes. If none of the dependencies change, the function will not be called, and the last returned value will be used.

```jsx
import { useMemo } from "react";

function Cart({ products }) {
  const totalPrice = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [products]);

  return (
    <div>
      {/* Some other content in the cart */}
      {/* Products to display */}
      <p>
        Total Price: <strong>${totalPrice}</strong>
      </p>
      {/* Some button to checkout */}
    </div>
  );
}
```
