# Functions in CSS

## calc()
- mixing units
- nesting

~~~
:root {
	--header: 3rem;
	--footer: 40px;
	--main: calc(100vh - calc(var(--header) + var(--footer)));
}
~~~

## min()
- for responsive pages
~~~
#iconHolder {
  width: min(150px, 100%);
  height: min(150px, 100%);
  box-sizing: border-box;
  border: 6px solid blue;
}
~~~

## max()
~~~
width: max(100px, 4em, 50%);
~~~
100px - "guard value" - width won't ever be set to less than 100px.

## clapm()
~~~
h1 {
  font-size: clamp(320px, 80vw, 60rem);
}
~~~

- the smallest value (320px)
- the ideal value (80vw)
- the largest value (60rem)
