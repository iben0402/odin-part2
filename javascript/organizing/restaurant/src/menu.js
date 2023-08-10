import _ from 'lodash';

 const menuComponent = () => {
    const element = document.createElement('div');

    const menuTitle = document.createElement('h2');
    menuTitle.innerHTML = 'Menu';

    const menu = document.createElement('ul');
    
    const menuItem1 = document.createElement('li');
    menuItem1.innerHTML = 'Kaczka po pekińsku';

    const menuItem2 = document.createElement('li');
    menuItem2.innerHTML = 'Kaczka po polsku';

    const menuItem3 = document.createElement('li');
    menuItem3.innerHTML = 'Kaczka po węgiersku';

    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);

    element.appendChild(menuTitle);
    element.appendChild(menu);

    return element;
 }

 export default menuComponent;