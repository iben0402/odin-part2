# Transitions
CSS transitions let you animate a change from an element’s initial state to an end state.

```css
button {
  /* ... other CSS properties ... */
  transition-property: background-color;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  transition-delay: 0.25s;
}
```
**transition-property** - This determines what CSS property will be transitioned. In this case it is the background-color.

**transition-duration** - This determines the duration that the transition will occur over. In this case the color change will gradually happen over 1 second.

**transition-timing-function** - This lets us change the speed of the transition over the course of its duration. Here it will ease-out, meaning the color change will be faster at the start than at the end of the transition.

**transition-delay** - This determines the delay at which the transition will start. In this case, the color change starts a quarter of a second after the cursor rests on the button.

## Shorthand
```css
button {
  /* ... other CSS properties ... */
  background-color: white;
  transition: background-color 1s ease-out 0.25s;
}

button:hover {
  background-color: black;
}
```
