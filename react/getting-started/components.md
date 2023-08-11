# Components
## What is a Component?
A component is a reusable piece of code that can be used to build elements sharing functionality and styling. Components can be nested inside other components to create more complex elements.

## How to Create a Component
Components can be created in two ways: as a function or as a class. The function method is the more modern approach.

## Code
```jsx
// Greeting.jsx
function Greeting() {
  return <h1>"I swear by my pretty floral bonnet, I will end you."</h1>;
}

export default Greeting;
```

```jsx
// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>,
)
```