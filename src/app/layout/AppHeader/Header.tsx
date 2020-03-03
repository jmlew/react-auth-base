import React from 'react';
import {
  Typography,
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  IconButton,
  Icon,
} from '@material-ui/core';
import { IconMat } from '../../shared/enums/icons.enum';

import ProfieMenu from './PofileMenu';
import AuthMenu from './AuthMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    leftButtons: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(2),
    },
    rightButtons: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface AppHeaderProps {
  isAuthenticated: boolean;
}

export default function AppHeader({ isAuthenticated }: AppHeaderProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.leftButtons} color="inherit">
            <Icon>{IconMat.Menu}</Icon>
          </IconButton>
          <div className={classes.title}>
            <Typography variant="h6">Authenticator App</Typography>
          </div>
          <div className={classes.rightButtons}>
            {isAuthenticated ? <ProfieMenu /> : <AuthMenu />}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
