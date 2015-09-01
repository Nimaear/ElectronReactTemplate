'use babel';

import React, {PropTypes, Component} from 'react';
import remote from 'remote';

let Menu = remote.require('menu');
let MenuItem = remote.require('menu-item');

let menu = new Menu();
menu.append(new MenuItem({ label: 'MenuItem1', click: function() { console.log('item 1 clicked'); } }));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));


export default class Test3 extends Component {

  showMenu(e) {
    console.log(e.target);
    e.preventDefault();
    menu.popup(remote.getCurrentWindow());
  }

  componentDidMount() {
    window.addEventListener('contextmenu', this.showMenu, false);
  }

  componentWillUnmount() {
    window.removeEventListener('contextmenu', this.showMenu);
  }

  render() {
    return (
      <div>
        <p>Test page 3</p>
        <p>Test page 3</p>
        <p>Test page 3</p>
        <p>Test page 3</p>
        <p>Test page 3</p>
        <p>Test page 3</p>
        <p>Test page 3</p>
        <p>Test page 3</p>
        <p>Test page 3</p>

      </div>
    );
  }
}

