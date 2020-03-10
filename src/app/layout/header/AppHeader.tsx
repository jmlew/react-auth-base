import React, { MouseEvent } from 'react';
import {
  createStyles,
  makeStyles,
  AppBar,
  Icon,
  IconButton,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { IconMat } from '../../shared/enums/icons.enum';
import { authRouteConfig, userRouteConfig } from '../../shared/constants/routes';

import ProfieMenu from './PofileMenu';
import AuthMenu from './AuthMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leftButtonsSpacer: {
      width: 30,
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
  isAuth: boolean;
  onSignout: () => void;
  onToggleSidenav: (event: MouseEvent) => void;
}

export default function AppHeader({
  isAuth,
  onToggleSidenav,
  onSignout,
}: AppHeaderProps) {
  const classes = useStyles();

  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
  const accountPath = `${userRouteConfig.account.basePath}${userRouteConfig.account.path}`;
  const registerPath = `${userRouteConfig.register.basePath}${userRouteConfig.register.path}`;

  return (
    <AppBar position="static">
      <Toolbar>
        {isAuth ? (
          <IconButton
            className={classes.leftButtons}
            color="inherit"
            onClick={onToggleSidenav}
          >
            <Icon>{IconMat.Menu}</Icon>
          </IconButton>
        ) : (
          <div className={classes.leftButtonsSpacer} />
        )}
        <div className={classes.title}>
          <Typography variant="h6">Authenticator App</Typography>
        </div>
        <div className={classes.rightButtons}>
          {isAuth ? (
            <ProfieMenu onSignout={onSignout} accountPath={accountPath} />
          ) : (
            <AuthMenu signinPath={signinPath} registerPath={registerPath} />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
