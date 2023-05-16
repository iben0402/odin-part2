# CSS selectors

- **>** - the child cominator
- **+** - the adjacent sibling cominator (neighbour)
- **~** - the general sibling cominator

## Example

~~~
<main class="parent">
  <div class="child group1">
    <div class="grand-child group1"></div>
  </div>
  <div class="child group2">
    <div class="grand-child group2"></div>
  </div>
  <div class="child group3">
    <div class="grand-child group3"></div>
  </div>
</main>
~~~

- all child and grand-child divs inside of main
~~~
main div {
  /* Our cool CSS */
}
~~~
- only child or grand-child
~~~
/* This rule will only select divs with a class of child */
main > div {
  /* Our cool CSS */
}

/* This rule will only select divs with a class of grand-child */
main > div > div {
  /* More cool CSS */
}
~~~
- other rules
~~~
/* This rule will only select the div with the class child group2 */
.group1 + div {
  /* Our cool CSS */
}

/* This rule will only select the div with the class child group3 */
.group1 + div + div {
  /* More cool CSS */
}

/* This rule will select all of .group1's siblings - in this case the 2nd and 3rd .child divs */
.group1 ~ div {
  /* Our cool CSS */
}
~~~

## [Pseudo-selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

- :focus - currently selected
- :hover - under user mouse pointer
- :active - elements currently being clicked

#### Structural
- :root - top of the document, global rules
- :first-child and :last-child - first or last sibling
- :empty - no children
- :only-child - don't have siblings 
- :nth-child(x):
~~~
  .myList:nth-child(5) {/* Selects the 5th element with class myList */}

  .myList:nth-child(3n) { /* Selects every 3rd element with class myList */}

  .myList:nth-child(3n + 3) { /* Selects every 3rd element with class myList, beginning with the 3rd */}

  .myList:nth-child(even) {/* Selects every even element with class myList */}
~~~

#### pseudo-elements
- ::marker - customize the styling of your \<li> elements’ bullets or numbers.
- ::first-letter and ::first-line - allow you to give special styling to the first letter or line of some text.
- ::selection - allows you to change the highlighting when a user selects text on the page.
- ::before and ::after - allow us to add extra elements onto the page with CSS, instead of HTML. Using it to decorate text in various ways is one common use case.

~~~
<style>
  .emojify::before {
    content: '😎 🥸 🤓';
}

  .emojify::after {
    content: '🤓 🥸 😎';
}
</style>

<body>
  <div> Let's <span class="emojify">emojify</span>this span!</div>
</body>
~~~

**Output:** Let’s 😎 🥸 🤓 emojify 🤓 🥸 😎 this span!

## Attribute selector
~~~
  [src] {
    /* This will target any element that has a src attribute. */
  }

  img[src] {
    /* This will only target img elements that have a src attribute. */
  }

  img[src="puppy.jpg"] {
    /* This will target img elements with a src attribute that is exactly "puppy.jpg" */
  }


  [class^='aus'] {
  /* 
    This will target any class that begins with 'aus':
    class='austria'
    class='australia'
  */
}

[src$='.jpg'] {
  /* This will target any src attribute that ends in '.jpg':
  src='puppy.jpg'
  src='kitten.jpg'
  */
}

[for*='ill'] {
  /* This will target any for attribute that has 'ill' anywhere inside it:
  for="bill"
  for="jill"
  for="silly"
  for="ill"
  */
}
~~~