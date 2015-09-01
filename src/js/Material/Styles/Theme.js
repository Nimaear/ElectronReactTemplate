import {Styles} from 'material-ui';
import ThemeManager from 'Material/Styles/ThemeManager';
import PersistentStorage from 'PersistentStorage';

let theme = PersistentStorage.get('theme') || {primary : 'blue', accent : 'red'};

export default new ThemeManager('Light', theme.primary, theme.accent);