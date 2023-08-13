# Class components
## Example
```jsx
import React, { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
```

## Component Lifecycle Methods
### **render()**
The `render()` method is the only required method in a class component. It is called every time the component is updated, and should return a React element (JSX).

### **componentDidMount()**
The `componentDidMount()` method is called after the component is rendered for the first time. This is a good place to make API calls, set up subscriptions, or perform other side effects.

### **componentDidUpdate()**
This method is run after a component re-renders. Because of this, you have to be careful about what you update in this method, as if you’re updating state indiscriminately, a re-render is caused, and you’ll end up in an endless loop. You can avoid this issue by using conditional statements about the equality of previous and current props when updating state.

In this method you should be updating anything that needs to be changed in response to either the DOM changing, or any states that you might want to act on upon change. For example, you’d want to refetch user data if the user changes.

### **componentWillUnmount()**
This is the last lifecycle method, which is called before a component is unmounted and destroyed. In this method you should be performing cleanup actions, so that would be cancelling network requests, clearing timers, etc.

## How useEffect() combines the lifecycle methods
The **useEffect** hook used in functional components is essentially a **combination of componentDidMount, componentDidUpdate, and componentWillUnmount**. Which method/methods it relates to varies based on it’s dependency array, and if it returns anything.

* An empty dependency array would be equivalent to componentDidMount.
* A dependency array with a value/values in it would be a combination of componentDidMount and componentDidUpdate, but only updating when dependencies change.
* No dependency array would be equivalent to componentDidMount and componentDidUpdate combined.
* A return function inside of a useEffect() hook would be equivalent to componentWillUnmount.