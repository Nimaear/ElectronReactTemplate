import {Styles} from 'material-ui';
import ThemeManager from 'Material/Styles/ThemeManager';

let theme = JSON.parse(localStorage.getItem('theme')) || {primary : 'blue', accent : 'red'};

export default new ThemeManager('Light', theme.primary, theme.accent);