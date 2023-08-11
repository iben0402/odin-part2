# JSX
JSX is a syntax extension for Javascript that lets you write HTML-like markup inside a Javascript file. It’s not required to use JSX when writing React components, but it does make writing them more simple and concise.

## Rules
1. Return a single element

    If you wish to return multiple elements in a component, you can do so by wrapping them in a parent tag. This can be a \<div>, or, if you don’t want the elements to have a container, you could use a React fragment, like so: <>Children</>

2. Close all tags.
3. CameCase **most** attributes
    Instead of stroke-width, you’d use strokeWidth, and instead of class you’d use className.

## Converting HTML to JSX
[Example](https://www.theodinproject.com/lessons/node-path-react-new-what-is-jsx#converting-html-to-jsx)