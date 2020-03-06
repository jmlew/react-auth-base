import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { makeStyles, Divider, Paper, Theme, Typography } from '@material-ui/core';

import { uiThemeContainers, uiThemeGeneral } from '../../../styles/theme/ui-theme';

const useStyles = makeStyles((theme: Theme) => {
  const { contentPaper } = uiThemeContainers(theme);
  const { divider } = uiThemeGeneral(theme);
  return {
    contentPaper,
    divider,
    title: {
      marginBottom: theme.spacing(4),
    },
  };
});

interface UserViewProps extends RouteComponentProps {}

export function UserView({}: UserViewProps) {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.contentPaper}>
      <Typography
        className={classes.title}
        align="center"
        variant="h4"
        color="primary"
        gutterBottom={true}
      >
        User Account Settings
      </Typography>
      <Divider className={classes.divider} />
      <Typography align="center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis pariatur,
        libero culpa, dignissimos dolorem tenetur fugiat at itaque blanditiis fugit maxime
        voluptates inventore exercitationem. Voluptatum, sint. Quidem iusto amet
        perspiciatis!
      </Typography>
    </Paper>
  );
}
