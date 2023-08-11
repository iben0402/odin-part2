# Sematic HTML

## Example:
```html
<!-- BAD EXAMPLE -->
<div class='button-container'>
  <div class='rock'>Rock</div>
  <div class='paper'>Paper</div>
  <div class='scissors'>Scissors</div>
</div>

<!-- GOOD EXAMPLE -->
<div class='button-container'>
  <button class='rock'>Rock</button>
  <button class='paper'>Paper</button>
  <button class='scissors'>Scissors</button>
</div>
```

Because the \<button> element has a semantic meaning and provides context, a screen reader would announce the text content as well as the role of the element: “Rock, button”.

## Headings and landmarks
Headings are the \<h1> through \<h6> elements, and like the name implies, these elements act as headings to sections of a page. Landmarks, on the other hand, are HTML elements that act as regions of a page. There are seven native HTML elements that define these landmark regions:

* \<aside>
* \<footer>
* \<form>
* \<header>
* \<main>
* \<nav>
* \<section>