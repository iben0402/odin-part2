# Working with APIs
## API
**An API (Application Programming Interface) is a set of functions and procedures that allow for the creation of applications which access the features or data of an operating system, application, or other service.**

### Requesting Data 
as a URL query string parameter, like so:
```
https://api.weatherapi.com/v1/current.json?q=london
```
In most cases, you will have to create an account and request an “API key” from the API service before attempting to fetch data from their endpoints. Once obtained, an API key will usually have to be included with every data request, such as another URL query string parameter:
```
https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london
```

### Fetching Data
```javascript
// URL (required), options (optional)
fetch('https://url.com/some/url')
  .then(function(response) {
    // Successful response :)
  })
  .catch(function(err) {
    // Error :(
  });
```

#### example
```
// random gif with cats
https://api.giphy.com/v1/gifs/translate?api_key=p7pg2sQr9zDZj1VDY12GmWUvITmPIUk2&s=cats
```
## CORS
**Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.**

## Simple request
```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <img src="#" />
    <script>
      const img = document.querySelector("img");
      fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=p7pg2sQr9zDZj1VDY12GmWUvITmPIUk2&s=cats",
        { mode: "cors" }
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          img.src = response.data.images.original.url;
        });
    </script>
  </body>
</html>
```

## [List of public APIs](https://github.com/n0shake/Public-APIs)