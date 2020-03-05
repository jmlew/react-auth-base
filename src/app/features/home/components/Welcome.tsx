import React, { Fragment } from 'react';
import { Typography, Divider, makeStyles, Theme, Button } from '@material-ui/core';

import { uiThemeGeneral, uiThemeButtons } from '../../../styles/theme/ui-theme';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => {
  const { divider, link } = uiThemeGeneral(theme);
  const { btnRounded } = uiThemeButtons(theme);
  return {
    divider,
    link,
    btnRounded,
    title: {
      marginBottom: theme.spacing(4),
    },
    signIn: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(8),
    },
  };
});

interface WelcomeProps {
  isAuthenticated: boolean;
  signinPath: string;
}

export function Welcome({ isAuthenticated, signinPath }: WelcomeProps) {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography
        className={classes.title}
        align="center"
        variant="h2"
        color="primary"
        gutterBottom={true}
      >
        Welcome to the POC
      </Typography>
      <Divider className={classes.divider} />
      <Typography align="center" gutterBottom={true}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis pariatur,
        libero culpa, dignissimos dolorem tenetur fugiat at itaque blanditiis fugit maxime
        voluptates inventore exercitationem. Voluptatum, sint. Quidem iusto amet
        perspiciatis!
      </Typography>
      {!isAuthenticated && (
        <div className={classes.signIn}>
          <Link to={signinPath} className={classes.link}>
            <Button variant="contained" color="primary" className={classes.btnRounded}>
              Sign in
            </Button>
          </Link>
        </div>
      )}
    </Fragment>
  );
}
