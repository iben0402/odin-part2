# Async and Await
## Introduction
**async** and **await** are two keywords that can help make asynchronous read more like synchronous code. This can help code look cleaner while keeping the benefits of asynchronous code.

For example, the two code blocks below do the exact same thing. They both get information from a server, process it, and return a promise.
```javascript
// FIRST
function getPersonsInfo(name) {
  return server.getPeople().then(people => {
    return people.find(person => { return person.name === name });
  });
}

// SECOND
async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find(person => { return person.name === name });
  return person;
}
```

## ASYNC
The **async** keyword is used to define a function that will return a promise. The function will return a promise that will resolve to the value that the function returns. If the function throws an error, the promise will be rejected with the error.

## AWAIT
The **await** keyword is used to wait for a promise to resolve. It can only be used inside of an **async** function. The **await** keyword will pause the execution of the function until the promise resolves. If the promise is rejected, the function will throw an error.

## Error handling
When using **async** and **await**, you can use a **try/catch** block to handle errors. This is similar to how you would handle errors with synchronous code.

```javascript
async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    console.log(error);
  }
}
```
