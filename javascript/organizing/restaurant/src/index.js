import _ from 'lodash';
import './style.css';
import menuComponent from './menu.js';

 function component() {
    const element = document.createElement('div');
    
    const title = document.createElement('h1');
    title.innerHTML = _.join(['Kaczy', 'żer'], ' ');



    element.appendChild(title);
    element.appendChild(menuComponent());

    return element;
 }

document.body.appendChild(component());