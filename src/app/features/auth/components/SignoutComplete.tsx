import React from 'react';
import { makeStyles, Box, Button, Divider, Theme, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import {
  uiThemeButtons,
  uiThemeContainers,
  uiThemeGeneral,
} from '../../../styles/theme/ui-theme';

const useStyles = makeStyles((theme: Theme) => {
  const { btnWhiteRounded } = uiThemeButtons(theme);
  const { contentGreyRound } = uiThemeContainers(theme);
  const { divider, link } = uiThemeGeneral(theme);
  return {
    contentGreyRound,
    divider,
    link,
    btnSignin: {
      ...btnWhiteRounded,
      marginTop: 30,
    },
    title: {
      color: theme.palette.common.white,
    },
    body: {
      color: theme.palette.common.white,
    },
  };
});

interface SignoutCompleteProps {
  signinPath: string;
}

export function SignoutComplete({ signinPath }: SignoutCompleteProps) {
  const classes = useStyles();
  return (
    <div className={classes.contentGreyRound}>
      <Typography
        className={classes.title}
        align="center"
        variant="h4"
        gutterBottom={true}
      >
        You are logged out
      </Typography>
      <Divider className={classes.divider} />
      <Typography align="center" className={classes.body}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis pariatur,
        libero culpa, dignissimos dolorem tenetur fugiat at itaque blanditiis fugit maxime
        voluptates inventore exercitationem. Voluptatum, sint. Quidem iusto amet
        perspiciatis!
      </Typography>
      <Box display="flex" justifyContent="center">
        <Link to={signinPath} className={classes.link}>
          <Button variant="contained" className={classes.btnSignin}>
            Sign in again
          </Button>
        </Link>
      </Box>
    </div>
  );
}
