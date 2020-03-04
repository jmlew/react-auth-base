import React, { Fragment } from 'react';
import { makeStyles, Theme, Divider, Container, Typography } from '@material-ui/core';
import { themeColours } from '../../styles/theme/colors';

interface AppFooterProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.grey[200],
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

export default function AppFooter({}: AppFooterProps) {
  const classes = useStyles();
  return (
    <Fragment>
      <Divider />
      <div className={classes.root}>
        <Divider />
        <Container maxWidth="sm" className={classes.content}>
          <Typography variant="body2" className={classes.label}>
            Authenticator POC
          </Typography>
          <Copyright />
        </Container>
      </div>
    </Fragment>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      {/* <Link color="inherit" href="/">
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
