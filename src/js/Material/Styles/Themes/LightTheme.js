import {Styles, Utils} from 'material-ui';
import {Colors, Text, Theme} from '../Colors';

let {Spacing} = Styles;
let {Extend, ColorManipulator} = Utils;

var TextColors = Text.Dark;
var ThemeColors = Theme.Light;

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */

var LightTheme = {
  spacing: Spacing,
  contentFontFamily: 'Roboto, sans-serif',
  getPalette: function(primary = 'red', accent = 'indigo') {
    var primaryColor = Colors[primary],
        accentColor = Colors[accent];
    return {
      primary1Color: primaryColor[500].material,
      primary2Color: primaryColor[700].material,
      primary3Color: primaryColor[100].material,
      accent1Color: accentColor[500].material,
      accent2Color: accentColor[700].material,
      accent3Color: accentColor[100].material,
      textColor: TextColors.text,
      canvasColor: ThemeColors.background,
      borderColor: TextColors.divider,
      disabledColor: TextColors.disabled,
      primary1TextColor: Text[primaryColor[500].text].text,
      primary2TextColor: Text[primaryColor[700].text].text,
      primary3TextColor: Text[primaryColor[100].text].text,
      accent1TextColor: Text[accentColor[500].text].text,
      accent2TextColor: Text[accentColor[700].text].text,
      accent3TextColor: Text[accentColor[100].text].text,
      primary: primary,
      accent: accent,

    };
  },
  getComponentThemes: function(palette) {
    var obj = {
      appBar: {
        color: palette.primary1Color,
        textColor: palette.primary1TextColor,
        height: Spacing.desktopKeylineIncrement
      },
      button: {
        height: 36,
        minWidth: 88,
        iconButtonSize: Spacing.iconSize * 2
      },
      checkbox: {
        boxColor: palette.textColor,
        checkedColor: palette.primary1Color,
        requiredColor: palette.primary1Color,
        disabledColor: palette.disabledColor
      },
      datePicker: {
        color: palette.primary1Color,
        textColor: palette.primary1TextColor,
        calendarTextColor: palette.textColor,
        selectColor: palette.primary2Color,
        selectTextColor: palette.primary2TextColor
      },
      dropDownMenu: {
        accentColor: palette.borderColor
      },
      flatButton: {
        color: palette.canvasColor,
        textColor: palette.textColor,
        primaryTextColor: palette.accent1Color,
        secondaryTextColor: palette.primary1Color,
      },
      floatingActionButton: {
        buttonSize: 56,
        miniSize: 40,
        color: palette.accent1Color,
        iconColor: palette.accent1TextColor,
        secondaryColor: palette.primary1Color,
        secondaryIconColor: palette.primary1TextColor,
      },
      inkBar: {
        backgroundColor: Colors.yellow[200].material,
      },
      leftNav: {
        width: Spacing.desktopKeylineIncrement * 4,
        color: ThemeColors.card
      },
      listItem: {
        nestedLevelDepth: 18,
      },
      menu: {
        backgroundColor: ThemeColors.card,
        containerBackgroundColor: ThemeColors.card,
      },
      menuItem: {
        dataHeight: 32,
        height: 48,
        hoverColor: 'rgba(0, 0, 0, .035)',
        padding: Spacing.desktopGutter,
        selectedTextColor: palette.accent1Color,
      },
      menuSubheader: {
        padding: Spacing.desktopGutter,
        borderColor: palette.borderColor,
        textColor: palette.primary1Color
      },
      paper: {
        backgroundColor: ThemeColors.card,
      },
      radioButton: {
        borderColor:  palette.textColor,
        backgroundColor: ThemeColors.card,
        checkedColor: palette.primary1Color,
        requiredColor: palette.primary1Color,
        disabledColor: palette.disabledColor,
        size: 24,
      },
      raisedButton: {
        color: ThemeColors.card,
        textColor: palette.textColor,
        primaryColor: palette.accent1Color,
        primaryTextColor: palette.accent1TextColor,
        secondaryColor: palette.primary1Color,
        secondaryTextColor: palette.primary1TextColor
      },
      slider: {
        trackSize: 2,
        trackColor: Colors.minBlack,
        trackColorSelected: Colors.grey['500'],
        handleSize: 12,
        handleSizeDisabled: 8,
        handleColorZero: Colors.grey['400'],
        handleFillColor: Colors.white,
        selectionColor: palette.primary3Color,
        rippleColor: palette.primary1Color
      },
      snackbar: {
        textColor: palette.accent1TextColor,
        backgroundColor: '#323232',
        actionColor: palette.accent1Color
      },
      timePicker: {
        color: ThemeColors.card,
        textColor: Colors.grey['600'],
        accentColor: palette.primary1Color,
        clockColor: Colors.black,
        selectColor: palette.primary2Color,
        selectTextColor: palette.primary2TextColor
      },
      toggle: {
        thumbOnColor: palette.primary1Color,
        thumbOffColor: Colors.grey['50'],
        thumbDisabledColor: Colors.grey['400'],
        thumbRequiredColor: palette.primary1Color,
        trackOnColor: ColorManipulator.fade(palette.primary1Color, 0.5),
        trackOffColor: Colors.minBlack,
        trackDisabledColor: Colors.faintBlack
      },
      toolbar: {
        backgroundColor: ColorManipulator.darken('#eeeeee', 0.05),
        height: 56,
        titleFontSize: 20,
        iconColor: 'rgba(0, 0, 0, .40)',
        separatorColor: 'rgba(0, 0, 0, .175)',
        menuHoverColor: 'rgba(0, 0, 0, .10)'
      },
      tabs: {
        backgroundColor: palette.primary1Color,
      }
    };

    // Properties based on previous properties
    obj.flatButton.disabledTextColor = ColorManipulator.fade(obj.flatButton.textColor, 0.3),
    obj.floatingActionButton.disabledColor = ColorManipulator.darken(Colors.white, 0.1),
    obj.floatingActionButton.disabledTextColor = ColorManipulator.fade(palette.textColor, 0.3)
    obj.raisedButton.disabledColor = ColorManipulator.darken(obj.raisedButton.color, 0.1),
    obj.raisedButton.disabledTextColor = ColorManipulator.fade(obj.raisedButton.textColor, 0.3)
    obj.slider.handleSizeActive = obj.slider.handleSize * 2;
    obj.toggle.trackRequiredColor = ColorManipulator.fade(obj.toggle.thumbRequiredColor, 0.5);

    return obj;
  }
};

module.exports = LightTheme;
