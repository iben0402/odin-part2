# Managing State with context API
The Context API in React is a feature that allows you to manage the global state of your application without the need to pass data through multiple levels of components using props. It provides a way to share data and functionality across different components, regardless of where they are located in the component tree.

## Implementing
1. **createContext** - creates a context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
2. **useContext** - this hook is used to consume data from a context object created by createContext.
3. **ContextObject.Provider** - The context object comes with the Provider component that accepts a prop called value, which is the context value that's going to be passed downe to the components no matter how deeply they're nested.

```jsx
import { createContext } from 'react';
```

On shop example:
```jsx
const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});
```
## Usage
```jsx
import { useState, createContext } from 'react';
// other imports for Header and ProductDetail

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

export default function App() {
  const [cartItems, setCartItems] = useState([
    /* List of Items in Cart */
  ]);
  const products = /* some custom hook that fetches products and returns the fetched products */

  const addToCart = () => {
    // add to cart logic (this adds to cartItems)
  };

  return (
    /* We are going to pass the things that we want to inject to these components using the value prop */
    /* This value prop will overwrite the default value */
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <Header />
      <ProductDetail />
    </ShopContext.Provider>
  );
}
```

And for example in Header.jsx file:
```jsx
import { useContext } from "react";
// import for ShopContext
// import for Link

function Links() {
  const { cartItems } = useContext(ShopContext); // We must pass the ShopContext object itself as an argument

  return (
    <ul>
      {/* Other links */}
      <li>
        <Link to="Link to the cart">
          <span>Cart</span>
          <div class="cart-icon">{cartItems.length}</div>
        </Link>
      </li>
    </ul>
  );
}

export default function Header() {
  return (
    <header>
      {/* Other header elements */}
      <nav>
        <Links />
      </nav>
    </header>
  );
}
```