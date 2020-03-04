import React, { KeyboardEvent, MouseEvent } from 'react';
import { makeStyles, Theme, List, Divider, createStyles } from '@material-ui/core';

import NavListItem from './NavListItem';
import { IconMat } from '../../shared/enums/icons.enum';
import { RouteItem } from '../../shared/models/routes.model';
import { appRouteConfig } from '../../shared/constants';
import { uiThemeGeneral } from '../../styles/theme/ui-theme';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => {
  const { link } = uiThemeGeneral(theme);
  return createStyles({
    root: {
      marginTop: 8,
      minWidth: 210,
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    link: {
      ...link,
      color: theme.palette.grey[800],
    },
  });
});

interface NavMenuProps {
  onClose: () => void;
}

export default function NavMenu({ onClose }: NavMenuProps) {
  const classes = useStyles();
  const features: RouteItem[] = [
    appRouteConfig.accounts,
    appRouteConfig.transactions,
    appRouteConfig.cards,
  ];

  function handleSelect(event: KeyboardEvent | MouseEvent) {
    if (isInvalidKey(event.type, (event as KeyboardEvent).key)) {
      return;
    }
    onClose();
  }

  return (
    <List className={classes.root}>
      <Link to={'/'} className={classes.link}>
        <NavListItem icon={IconMat.Home} onSelect={handleSelect} />
      </Link>
      <Divider className={classes.divider} />
      {features.map((item: RouteItem) => (
        <Link
          to={`${item.basePath}${item.path}`}
          className={classes.link}
          key={item.path}
        >
          <NavListItem icon={item.icon} label={item.label} onSelect={handleSelect} />
        </Link>
      ))}
      <Divider className={classes.divider} />
    </List>
  );
}

function isInvalidKey(type: string, key: string): boolean {
  return type === 'keydown' && (key === 'Tab' || key === 'Shift');
}
