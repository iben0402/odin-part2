# Introduction
The library for web and native interfaces

React provides powerful primitives (built-in functions/modules) that allow us to build user interfaces of varying complexities. Throughout this course, we’ll learn all about the functionality React provides and learn to build cool applications.

[Setting environment](https://www.theodinproject.com/lessons/node-path-react-new-setting-up-a-react-environment)

# Steps:
```bash
npm create vite@latest name_of_project -- --template react

cd name_of_project
npm install
npm run dev
```

## Files:
The **main.jsx** file here serves as the entry point of the application.
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

* We import React itself, and its fellow ReactDOM package.
* We import the App component from App.jsx, so that we may place (render) it within the DOM.
* We import some CSS styling (you may recognize this syntax from the Webpack material).
* We create a root object by invoking ReactDOM.createRoot with an element from our index.html.
* We invoke the render method which is attached to our root object, with some very interesting-looking syntax inside the parentheses.

