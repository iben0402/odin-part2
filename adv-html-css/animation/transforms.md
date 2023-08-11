# Transforms
**The transform property takes in one or more CSS transform functions as its values, with those functions taking in their own value, usually an angle or a number.**

Almost all elements can have the transform property applied to it, with the exceptions being <col>, <colgroup>, and non-replaced inline elements. “Non-replaced” simply refers to elements whose content is contained within the HTML document (\<span>, \<b>, and \<em>, for example), as opposed to a “replaced” element’s content being contained outside of the document (\<a>, \<iframe>, and \<img>, for example)

## Two-dimensional transforms
* rotate(radius)
* scale(x, y), scaleX(x), scaleY(y)
* skew(x, y), skewX(x), skewY(y)
* translate(x, y), translateX(x), translateY(y)

You can chain multiple transforms:
```css
.red-box,
.blue-box {
  position: absolute;
  width: 100px;
  height: 100px;
}

.red-box {
  background: red;
  transform: rotate(45deg) translate(200%);
}

.blue-box {
  background: blue;
  transform: translate(200%) rotate(45deg);
}
```
The position of blue and red box will not be the same, because the order of transforms matters. The order of transforms is important because each transform is applied in order from left to right. This means that the first transform is applied to the element, then the second transform is applied to that transformed element, and so on.

## Three-dimensional transforms
* perspective() - Essentially, by setting a perspective value, we are telling the object to render as if we were viewing it from a specific distance on the z-axis
* rotateX(), rotateY(), rotateZ(), rotate3d()
* scale3d(), scaleZ()
* translate3d(), translateZ()
* matrix3d() - Matrix is a way of combining all transform functions into one. It is seldom used due to its poor readability, and almost never written by hand.

