# CSS - custom properties

~~~
.error-modal {
    /* declaring */
  --color-error-text: red;
  --modal-border: 1px solid black;
  --modal-font-size: calc(2rem + 5vw);

    /* using */
  color: var(--color-error-text);
  border: var(--modal-border);
  font-size: var(--modal-font-size);
}
~~~

## fallback values (default)
~~~
.fallback {
  --color-text: white;

  background-color: var(--undeclared-property, black);
  color: var(--undeclared-again, var(--color-text, yellow));

  /* background-color = black, color = white */
}
~~~

## scope
~~~
<div class='cool-div'>
  <p class='cool-paragraph'>Check out my cool, red background!</p>
</div>

<p class='boring-paragraph'>I'm not in scope so I'm not cool.</p>
~~~
~~~
.cool-div {
  --main-bg: red;
}

/* would get styled */
.cool-paragraph {
  background-color: var(--main-bg);
}

/* wouldn't get styled */
.boring-paragraph {
  background-color: var(--main-bg);
}
~~~

~~~
:root {
    --main-color: red;
}
/* now both classes from previous code would get styled (global variable) */
~~~


## Creating Themes
1. [CodePen example 1](https://codepen.io/TheOdinProjectExamples/pen/PojVRMb)
2. [CodePen example 2](https://codepen.io/TheOdinProjectExamples/pen/powGZzE)



