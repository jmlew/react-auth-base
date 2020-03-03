import React, { Fragment } from 'react';
import { makeStyles, Theme, Divider } from '@material-ui/core';

interface AppFooterProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.grey[200],
  },
  content: {},
}));

export default function AppFooter({}: AppFooterProps) {
  const classes = useStyles();
  return (
    <Fragment>
      <Divider />
      <div className={classes.root}>Footer content</div>
    </Fragment>
  );
}
