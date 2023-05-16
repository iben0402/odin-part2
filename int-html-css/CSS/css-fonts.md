# CSS Fonts

## Importing in HTML
~~~

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

~~~

## Importing in CSS
~~~
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
~~~

## Setting font (CSS)

~~~
body {
  font-family: 'Roboto', sans-serif;
}
~~~

## Spacing between letters
~~~
.class {
    letter-spacing: .5em;
}

.class2 {
    letter-spacing: -.15em;
}
~~~
## line height
~~~
.class3 {
    font-height: 1.5;
}
~~~

## truncate overflowing text with an ellipsis (sth sth...)
~~~
.overflowing {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
~~~