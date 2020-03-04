import React, { MouseEvent } from 'react';
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
import { authRouteConfig, userRouteConfig } from '../../shared/constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  toggleSidenav: (event: MouseEvent) => void;
}

export default function AppHeader({ isAuthenticated, toggleSidenav }: AppHeaderProps) {
  const classes = useStyles();

  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
  const accountPath = `${userRouteConfig.account.basePath}${userRouteConfig.account.path}`;
  const registerPath = `${userRouteConfig.register.basePath}${userRouteConfig.register.path}`;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.leftButtons}
          color="inherit"
          onClick={toggleSidenav}
        >
          <Icon>{IconMat.Menu}</Icon>
        </IconButton>
        <div className={classes.title}>
          <Typography variant="h6">Authenticator App</Typography>
        </div>
        <div className={classes.rightButtons}>
          {isAuthenticated ? (
            <ProfieMenu signinPath={signinPath} accountPath={accountPath} />
          ) : (
            <AuthMenu signinPath={signinPath} registerPath={registerPath} />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
