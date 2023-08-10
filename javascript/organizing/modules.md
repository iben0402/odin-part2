# ES6 modules
## npm
The node package manager is a command-line tool that gives you access to a gigantic repository of plugins, libraries and tools.
## modules
```javascript
// a file called functionOne.js
const functionOne = () => console.log('FUNCTION ONE!');

export { functionOne };


// another JS file
import { functionOne } from './functionOne';

functionOne(); // this should work as expected!
```
