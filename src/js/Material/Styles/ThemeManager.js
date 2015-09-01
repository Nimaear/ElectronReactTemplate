import {Styles, Utils} from 'material-ui';

let {Spacing} = Styles;
let {Extend} = Utils;

let Types = {
  Light: require('./Themes/LightTheme'),
  Dark: require('./Themes/DarkTheme')
};

export default class ThemeManager {

  constructor(theme = 'Light', primary = 'red', accent = 'indigo') {
    this.contentFontFamily = 'Roboto, sans-serif';
    this.theme = theme;
    this.template = Types[theme];
    this.spacing = Spacing;

    this.setThemeByName(theme, primary, accent);
  }

  setThemeByName(theme = 'Light', primary = 'red', accent = 'indigo') {
    this.primary = primary;
    this.accent = accent;
    this.theme = theme;
    this.palette = Types[theme].getPalette(primary, accent);
    this.component = Types[theme].getComponentThemes(this.palette);
  }

  setPrimary(primary = 'red') {
    this.primary = primary;
    this.palette = Types[this.theme].getPalette(primary, this.accent);
    this.component = Types[this.theme].getComponentThemes(this.palette);

  }

  setAccent(accent = 'indigo') {
    this.accent = accent;
    this.palette = Types[this.theme].getPalette(this.primary, accent);
    this.component = Types[this.theme].getComponentThemes(this.palette);

  }

  getCurrentTheme() {
    return this;
  }

  setTheme(newTheme) {
    this.setPalette(newTheme.getPalette(this.primary, this.accent));
    this.setComponentThemes(newTheme.getComponentThemes(this.palette));
  }

  setPalette(newPalette) {
    this.palette = Extend(this.palette, newPalette);
    this.component = Extend(this.component, this.template.getComponentThemes(this.palette));
  }

  setComponentThemes(overrides) {
    this.component = Extend(this.component, overrides);
  }
}
