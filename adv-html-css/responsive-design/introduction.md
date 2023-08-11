# Introduction to Responsive Design
## What screen sizes should we support
* Lowest resolution: 320px
* Highest resolution: 2560px

## Viewport meta tag
It simply sets the initial width of the webpage to the size of the actual screen you’re viewing it on, and telling it not to zoom in or out.
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
## Avoid fixed width and height
Obviously the context will determine what works in a given situation, but an easy fix in many cases is replacing width or height with max-width or min-height (min-width and max-height are also valid and may be useful depending on the context).

### Use flex and grid!

## Responsive Images
If an image is given a flexible width, and the height is set to auto, then it should retain its aspect ratio correctly.

## Media queries
```css
body {
  margin: 24px;
}

@media (max-width: 600px) {
  body {
    margin: 8px;
  }
}
```
