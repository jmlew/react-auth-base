import React, { Fragment } from 'react';
import { Typography, Divider, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginBottom: theme.spacing(4),
  },
  divider: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}));

function Welcome() {
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
      <Typography align="center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis pariatur,
        libero culpa, dignissimos dolorem tenetur fugiat at itaque blanditiis fugit maxime
        voluptates inventore exercitationem. Voluptatum, sint. Quidem iusto amet
        perspiciatis!
      </Typography>
    </Fragment>
  );
}

export default Welcome;
