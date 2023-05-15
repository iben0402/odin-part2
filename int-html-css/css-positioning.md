# Positioning in CSS

## Static and Relative positioning
- **position: static** - default positioning. top, right, bottom and left does **not** affect position of element.
- **position: relative** - same as static **but** top, right, bottom and left displace element relative to its normal position

## Absolute positioning
**position: absolute** - allows you to position something at an exact point on the screen without disturbing the other elements around it. A couple of good use cases for absolute positioning are:
- modals
- image with a caption on it
- icons on top of other elements

## Fixed positioning
Fixed elements are also removed from the normal flow of the document and are positioned relative to the viewport. You basically use top, right, bottom, and left properties to position it, and it will stay there as the user scrolls. (Navigation bar)

## Sticky positioning
Sticky elements will act like normal elements until you scroll past them, then they start behaving like fixed elements. They are also not taken out of the normal flow of the document.
[Example](https://codepen.io/theanam/pen/MPLBYy)