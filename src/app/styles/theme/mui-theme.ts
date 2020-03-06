import red from '@material-ui/core/colors/red';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { Palette } from '@material-ui/core/styles/createPalette';

import { themeColours } from './colors';

/**
 * Material UI (@material-ui) theme settings.
 */

const muiTheme: Theme = createMuiTheme({
  spacing: (value) => `${0.25 * value}rem`, // Match ui-variables/_layout.scss.
  palette: {
    primary: {
      main: themeColours.primary,
      light: themeColours.primaryLight,
      dark: themeColours.primaryDark,
    },
    secondary: {
      main: themeColours.secondary,
      light: themeColours.secondaryLight,
      dark: themeColours.secondaryDark,
    },
    error: red,
  },
  overrides: {
    MuiButton: {
      root: {},
      label: {
        textTransform: 'none',
      },
    },
  },
  typography: (palette: Palette) => ({}),
  props: {},
});

export { muiTheme };
