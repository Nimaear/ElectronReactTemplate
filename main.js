'use babel';

import app from 'app';
import BrowserWindow from 'browser-window';
import path from "path";
import fs from "fs";
import PersistentStorage from 'PersistentStorage';

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  let initPath = path.join(app.getDataPath(), "settings.json");
  let bounds = PersistentStorage.get('bounds', {});

  mainWindow = new BrowserWindow({
    width: bounds.width || 800,
    height: bounds.height || 600,
    'min-width': 480,
    'min-height': 600,
    x: bounds.x || 0,
    y: bounds.y || 0,
    frame: false,
    'web-preferences' : {
      'overlay-scrollbars' : true
    }
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  mainWindow.on('close', () => {
    PersistentStorage.set('bounds', mainWindow.getBounds());
  });
});

app.on('window-all-closed', function() {
  app.quit();
});
