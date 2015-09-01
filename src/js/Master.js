'use babel';

import React, {PropTypes, Component} from 'react';
import {AppCanvas, AppBar,  RaisedButton} from 'material-ui';
import Theme from 'Material/Styles/Theme';
import Router, {RouteHandler} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import remote from 'remote';

injectTapEventPlugin();

export default class Master extends Component {

  getChildContext() {
    return {
      muiTheme: Theme.getCurrentTheme()
    };
  }

  showDialog() {
    let dialog = remote.require('dialog');
    let window = remote.getCurrentWindow();
    let openedFile = dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]});
  }

  quitApp() {
    let app = remote.require('app');
    app.quit();
  }

  navigateTo(nav) {
    console.log(nav)
    this.context.router.transitionTo(nav);
  }

  // componentDidMount() {
  //   let Menu = remote.require('menu');
  //   let template = [
  //     {
  //       label: 'Electron',
  //       submenu: [
  //         {
  //           label: 'About Electron',
  //           selector: 'orderFrontStandardAboutPanel:'
  //         },
  //         {
  //           type: 'separator'
  //         },
  //         {
  //           label: 'Services',
  //           submenu: []
  //         },
  //         {
  //           type: 'separator'
  //         },
  //         {
  //           label: 'Hide Electron',
  //           accelerator: 'CmdOrCtrl+H',
  //           selector: 'hide:'
  //         },
  //         {
  //           label: 'Hide Others',
  //           accelerator: 'CmdOrCtrl+Shift+H',
  //           selector: 'hideOtherApplications:'
  //         },
  //         {
  //           label: 'Show All',
  //           selector: 'unhideAllApplications:'
  //         },
  //         {
  //           type: 'separator'
  //         },
  //         {
  //           label: 'Quit',
  //           accelerator: 'CmdOrCtrl+Q',
  //           selector: 'terminate:'
  //         },
  //       ]
  //     },
  //     {
  //       label: 'Edit',
  //       submenu: [
  //         {
  //           label: 'Undo',
  //           accelerator: 'CmdOrCtrl+Z',
  //           selector: 'undo:'
  //         },
  //         {
  //           label: 'Redo',
  //           accelerator: 'Shift+CmdOrCtrl+Z',
  //           selector: 'redo:'
  //         },
  //         {
  //           type: 'separator'
  //         },
  //         {
  //           label: 'Cut',
  //           accelerator: 'CmdOrCtrl+X',
  //           selector: 'cut:'
  //         },
  //         {
  //           label: 'Copy',
  //           accelerator: 'CmdOrCtrl+C',
  //           selector: 'copy:'
  //         },
  //         {
  //           label: 'Paste',
  //           accelerator: 'CmdOrCtrl+V',
  //           selector: 'paste:'
  //         },
  //         {
  //           label: 'Select All',
  //           accelerator: 'CmdOrCtrl+A',
  //           selector: 'selectAll:'
  //         }
  //       ]
  //     },
  //     {
  //       label: 'View',
  //       submenu: [
  //         {
  //           label: 'Reload',
  //           accelerator: 'CmdOrCtrl+R',
  //           click: function() { remote.getCurrentWindow().reload(); }
  //         },
  //         {
  //           label: 'Toggle DevTools',
  //           accelerator: 'Alt+CmdOrCtrl+I',
  //           click: function() { remote.getCurrentWindow().toggleDevTools(); }
  //         },
  //       ]
  //     },
  //     {
  //       label: 'Window',
  //       submenu: [
  //         {
  //           label: 'Minimize',
  //           accelerator: 'CmdOrCtrl+M',
  //           selector: 'performMiniaturize:'
  //         },
  //         {
  //           label: 'Close',
  //           accelerator: 'CmdOrCtrl+W',
  //           selector: 'performClose:'
  //         },
  //         {
  //           type: 'separator'
  //         },
  //         {
  //           label: 'Bring All to Front',
  //           selector: 'arrangeInFront:'
  //         }
  //       ]
  //     },
  //     {
  //       label: 'Help',
  //       submenu: []
  //     }
  //   ];

  //   let menu = Menu.buildFromTemplate(template);

  //   Menu.setApplicationMenu(menu);
  // }

  render() {
    let appStyle ={
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    };

    let barStyle={
      display: 'flex',
      height: 64,
      flexGrow : 0,
      flexShrink: 0,
    }

    return (
      <AppCanvas >
        <div style={appStyle}>
          <AppBar className='title-bar' title="Title" style={{display: 'flex', height: 64, WebkitAppRegion: 'drag', flexGrow : 0,}} />
          <div style={{flexGrow : 1, overflow :'auto'}}>
            <RouteHandler />
          </div>
          <div style={barStyle}>
            <RaisedButton onTouchTap={this.showDialog.bind(this)} label='Dialog'/>

            <RaisedButton primary={true} onTouchTap={this.quitApp.bind(this)} label='Quit'/>
            <RaisedButton primary={true} onTouchTap={this.navigateTo.bind(this, 'test')} label='Test'/>
            <RaisedButton primary={true} onTouchTap={this.navigateTo.bind(this, 'test2')} label='Test2'/>
            <RaisedButton primary={true} onTouchTap={this.navigateTo.bind(this, 'test3')} label='Test3'/>
          </div>
        </div>

      </AppCanvas>
    );
  }
}

Master.childContextTypes = {
  muiTheme: PropTypes.object,
};

Master.contextTypes = {
  router: PropTypes.func
}

