import React, { KeyboardEvent, MouseEvent } from 'react';
import {
  makeStyles,
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
} from '@material-ui/core';

import { IconMat } from '../../shared/enums/icons.enum';

const useStyles = makeStyles((theme: Theme) => ({ root: {} }));

interface NavListItemProps {
  label?: string;
  icon?: IconMat;
  onSelect: (event: KeyboardEvent | MouseEvent) => void;
}

export default function NavListItem({ label, icon, onSelect }: NavListItemProps) {
  const classes = useStyles();
  return (
    <ListItem button={true} onClick={onSelect} onKeyDown={onSelect}>
      {icon != null && (
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
      )}
      {label != null && <ListItemText>{label}</ListItemText>}
    </ListItem>
  );
}
