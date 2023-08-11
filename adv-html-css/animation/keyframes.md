# Keyframes
* Transitions were designed to animate an element from one state to another. They can loop, but they weren’t designed for that. Animations, on the other hand, were designed with the purpose of explicitly enabling loops.
* Transitions need a trigger, such as the use of pseudo-classes like :hover or :focus, or by adding/removing a class via JavaScript. Animations, on the other hand, do not need such a trigger. Once you have your elements in place and CSS defined, an animation will start running immediately if that’s what you told it to do.
* Transitions are not as flexible as using animations. When you define a transition, imagine you are sending that element on a journey in a straight line from point A to point B. Yes, the transition-timing-function can add some variation to the timing of this change, but it doesn’t compare to the amount of flexibility added by using animations.

```css
#ball {
  width: 100px;
  height: 100px;
  background-color: red;
  border: 1px solid black;
  border-radius: 50%;
  animation-duration: 2s;
  animation-name: change-color;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes change-color {
  from {
    background-color: red;
  }
  
  50% {
    width: 200px;
    height: 200px;
    background-color: blue;
  }

  to {
    background-color: green;
  }
}
```

