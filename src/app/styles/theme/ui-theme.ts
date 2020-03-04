import { Theme } from '@material-ui/core';

/**
 * Global UI theme settings.
 */

const uiThemeGeneral = (theme: Theme) => ({
  divider: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
  },
  link: {
    textDecoration: 'none',
  },
});

const uiThemeButtons = (theme: Theme) => {
  const btnWhite = {
    backgroundColor: theme.palette.common.white,
  };
  const btnPadded = {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
  };
  const btnRounded = {
    borderRadius: 20,
    ...btnPadded,
  };
  const btnWhiteRounded = {
    ...btnWhite,
    ...btnRounded,
  };
  return {
    btnRounded,
    btnPadded,
    btnWhite,
    btnWhiteRounded,
  };
};

const uiThemeForm = (theme: Theme) => {
  const { btnPadded } = uiThemeButtons(theme);
  return {
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    btnSubmit: {
      ...btnPadded,
      margin: theme.spacing(3, 0),
      fontSize: 16,
    },
    input: {
      marginTop: theme.spacing(2),
    },
  };
};

const uiThemeContainers = (theme: Theme) => {
  const contentGreyRound = {
    background: theme.palette.grey[600],
    borderRadius: 40,
    padding: 40,
  };
  const contentPaper = {
    paddingTop: 30,
    paddingBottom: 40,
    paddingLeft: 40,
    paddingRight: 40,
  };
  const contentSection = {
    paddingTop: 40,
    paddingBottom: 45,
    paddingLeft: 20,
    paddingRight: 20,
  };
  return {
    contentGreyRound,
    contentPaper,
    contentSection,
  };
};

export { uiThemeGeneral, uiThemeButtons, uiThemeForm, uiThemeContainers };
