# Asynchronous Code
## Callbacks
**A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.**

Example:
```javascript
myDiv.addEventListener("click", function(){
  // do something!
})
```

## Promises
**A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).**

Example:
```javascript
const getData = function() {
  // go fetch data from some API...
  // clean it up a bit and return it as an object:
  return data
}
```

The issue with this example is that it takes some time to fetch the data, but unless we tell our code that, it assumes that everything in the function happens essentially instantly. So, if we try to do this:
```javascript
const myData = getData()
const pieceOfData = myData['whatever']
```
We’re going to run into trouble because when we try to extract pieceOfData out of the returned data, the function getData() will most likely still be fetching, so myData will not be the expected data, but will be undefined.

### Solution:
```javascript
const myData = getData() // if this is refactored to return a Promise...

myData.then(function(data){ // .then() tells it to wait until the promise is resolved
  const pieceOfData = data['whatever'] // and THEN run the function inside
})
```