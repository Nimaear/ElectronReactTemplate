'use babel';


class LocalStorage {

  get(key, defaultValue) {
    JSON.parse(localStorage.getItem(key)) || defaultValue;
  }

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

let storage;

if (typeof localStorage != 'undefined') {
  storage = new LocalStorage();
} else {
  let NodeStorage = require('NodeStorage');
  storage = new NodeStorage();
}

export default storage;
