# React router
## Client-side routing
Client-side routing is the type of routing where Javascript takes over the duty of handling the routes in an application. Client-side routing helps in building single-page applications (SPAs) without refreshing as the user navigates. For example, when a user clicks a navbar element, the URL changes and the view of the page is modified accordingly, within the client.

## Reactive solution
React Router is a standard routing library for React applications. By using React Router, we can specify React components, that can be rendered based on the route, and so much more. Let’s dive in!

## Using Router in React
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

To do this you have to:
```bash
npm install react-router-dom
```

## Link element
```jsx
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
```
And now, we don’t get the browser reloading every time we click the link on the navbar.

## Nested routes, outlets and dynamic segments
[notes](https://www.theodinproject.com/lessons/node-path-react-new-react-router#nested-routes-outlets-and-dynamic-segments)

## Bad Urls
```jsx
// ErrorPage.jsx
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
```
```jsx
// main.jsx

// Imports 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## Refactor 
It is best to keep router in separate file:
```jsx
// router.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile/:name",
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
```
And in main.jsx:
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
```
## Rerouting
[\<Navigate /> component ](https://reactrouter.com/en/main/components/navigate)

[useNavigate hook](https://reactrouter.com/en/main/hooks/use-navigate)