import React, { KeyboardEvent, MouseEvent } from 'react';
import {
  makeStyles,
  Theme,
  List,
  ListItem,
  Icon,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({ root: {} }));

interface AppSideNavMenuProps {
  onSelect: (event: KeyboardEvent | MouseEvent) => void;
}

export default function AppSideNavMenu({ onSelect }: AppSideNavMenuProps) {
  const classes = useStyles();
  return (
    <div role="presentation" onClick={onSelect} onKeyDown={onSelect}>
      <List>
        {['Accounts', 'Transactions', 'Cards'].map((item: string) => (
          <ListItem button={true} key={item}>
            <ListItemIcon>
              <Icon>person</Icon>
            </ListItemIcon>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
}
