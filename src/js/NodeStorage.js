'use babel';

import path from 'path';
import fs from 'fs';
import app from 'app';

export default class NodeStorage {
  constructor()  {
    this.settingsPath = path.join(app.getDataPath(), "settings.json");
    this.data = {};
    try {
      this.data = JSON.parse(fs.readFileSync(this.settingsPath, 'utf8'));
    } catch (e) {
      this.data = {};
    }
  }

  get(key, defaultValue) {
    return this.data[key] || defaultValue;
  }

  set(key, value) {
    this.data[key] = value;
    this.serialize();
  }

  serialize() {
    fs.writeFileSync(this.settingsPath, JSON.stringify(this.data));
  }
}