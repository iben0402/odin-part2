import _ from 'lodash';
import myName from './myName';
import {functionOne, functionTwo} from './myModule';

function component() {
    const element = document.createElement('div');
  
    element.textContent = myName('Iwona');
  
    return element;
  }
  
  document.body.appendChild(component());