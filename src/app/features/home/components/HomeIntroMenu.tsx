import React from 'react';
import { makeStyles, Theme, Button, Avatar, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { uiThemeGeneral, uiThemeButtons } from '../../../styles/theme/ui-theme';
import { RouteItem } from '../../../shared/models/routes.model';

const useStyles = makeStyles((theme: Theme) => {
  const { divider, link } = uiThemeGeneral(theme);
  const { btnRounded } = uiThemeButtons(theme);
  return {
    divider,
    link,
    btnRounded,
    root: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(8),
    },
    btnAvatar: {
      width: 50,
      height: 50,
      margin: theme.spacing(2),
      backgroundColor: theme.palette.secondary.main,
    },
    btnLabel: {
      marginRight: theme.spacing(3),
      fontSize: 20,
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.grey[600],
    },
  };
});

interface HomeIntroMenuProps {
  features: RouteItem[];
}

export function HomeIntroMenu({ features }: HomeIntroMenuProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {features.map((item: RouteItem) => (
        <Link
          to={`${item.basePath}${item.path}`}
          className={classes.link}
          key={item.path}
        >
          <Button className={classes.btnRounded}>
            <span className={classes.btnLabel}>{item.label}</span>
            <Avatar className={classes.btnAvatar}>
              <Icon>{item.icon}</Icon>
            </Avatar>
          </Button>
        </Link>
      ))}
    </div>
  );
}
