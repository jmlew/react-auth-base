import React, { Fragment } from 'react';
import { Typography, Divider, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
}));

function Welcome() {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography align="center" variant="h5" gutterBottom>
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
