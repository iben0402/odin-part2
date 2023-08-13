# Prop Types and Default Props
## PropTypes
```jsx
import PropTypes from 'prop-types';
import React from 'react';

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string,
};

export default RenderName;
```

PropTypes is a way to type check the props that a React component receives. It helps to catch potential type errors during development, making it easier to spot and fix bugs.

## DefaultProps
```jsx
RenderName.defaultProps = {
  name: 'Zach',
};
```
