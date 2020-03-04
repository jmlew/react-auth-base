import React from 'react';
import { makeStyles, Theme, Typography, Divider, Paper } from '@material-ui/core';

import { uiThemeGeneral, uiThemeContainers } from '../../../styles/theme/ui-theme';

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

interface UserSettingsFormProps {}

export default function UserSettingsForm({}: UserSettingsFormProps) {
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
