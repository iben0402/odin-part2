# Fetching data in React
## Basic fetch request
```javascript
const image = document.querySelector("img");
fetch("https://jsonplaceholder.typicode.com/photos", {
  mode: "cors",
})
  .then((response) => response.json())
  .then((response) => {
    image.src = response[0].url;
  })
  .catch((error) => console.error(error));
```

## Fetching data in React components
```jsx
import { useEffect, useState } from "react";

const Image = () => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => setImageURL(response[0].url))
      .catch((error) => console.error(error));
  }, []);

  return (
    imageURL && (
      <>
        <h1>An image</h1>
        <img src={imageURL} alt={"placeholder text"} />
      </>
    )
  );
};

export default Image;
```

## Handling errors

```jsx
  if (error) return <p>A network error was encountered</p>

  return (
    imageURL && (
      <>
        <h1>An image</h1>
        <img src={imageURL} alt={"placeholder text"} />
      </>
    )
  );
};
```
To set error we need to add state
```jsx
const [error, setError] = useState(null);
```
And assign value when a request fails
```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("server error");
      }
      return response.json();
    })
    .then((response) => setImageURL(response[0].url))
    .catch((error) => setError(error));
}, []);
```

## Loading state
```jsx
const Image = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>An image</h1>
      <img src={imageURL} alt={"placeholder text"} />
    </>
  );
};
```

## Using custom hooks
We can separate out the fetching logic into a custom hook
```jsx
import { useState, useEffect } from "react";

const useImageURL = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
};

const Image = () => {
  const { imageURL, error, loading } = useImageURL();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>An image</h1>
      <img src={imageURL} alt={"placeholder text"} />
    </>
  );
};
```
