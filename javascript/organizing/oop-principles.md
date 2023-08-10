# OOP Principles
## Single responsibility
One of the most important things to remember is the Single Responsibility Principle which states that a class (or object or module) should only have one responsibility. This doesn’t mean that an object can only do one thing, but it does mean that everything an object does should be part of one responsibility.

Here’s a really common example. Most of our code has functions to update and write things to the DOM in addition to our application logic. It’s a really good idea to separate your DOM stuff from the application logic.

So instead of this:
``` javascript
function isGameOver() {

  // game over logic goes here!

  if (gameOver){
    const gameOverDiv = document.createElement('div');
    gameOverDiv.classList.add('game-over');
    gameOverDiv.textContent = `${this.winner} won the game!`;
    document.body.appendChild(gameOverDiv);
  }
}
```
You should extract all the DOM manipulation into its own module and use it like so:
``` javascript
function isGameOver() {

  // game over logic goes here!

  if (gameOver){
    DOMStuff.gameOver(this.winner);
  }
}
```
In fact - the function isGameOver shouldn’t be calling the DOM function anyway. That should go elsewhere (directly in the game-loop).

Another way to think about the Single Responsibility Principle is that a given method/class/component should have a single reason to change. Otherwise, if an object is trying to have multiple responsibilities, changing one aspect might affect another.

## Loosely coupled objects
Obviously, all of our objects are intended to work together to form our final application. You should take care, however, to make sure that your individual objects can stand alone as much as possible. Tightly coupled objects are objects that rely so heavily on each other that removing or changing one will mean that you have to completely change another one - a real bummer.

This one is related pretty strongly to ‘Single Responsibility’ but takes a different angle. As an example, if we were writing a game and wanted to completely change how the User Interface worked, we should be able to do that without completely reworking the game logic. So we should be able to start off writing our game using primarily console.log()s and then add in a bunch of DOM functions later without touching the game logic.