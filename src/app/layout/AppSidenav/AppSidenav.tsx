import React, { KeyboardEvent, MouseEvent } from 'react';
import { Drawer } from '@material-ui/core';

import AppSideNavMenu from './AppSideNavMenu';

interface AppSidenavProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export default function AppSidenav({ isOpen, setOpen }: AppSidenavProps) {
  const toggleOpen = (state: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (isInvalidKey(event.type, (event as KeyboardEvent).key)) {
      return;
    }
    setOpen(state);
  };

  return (
    <Drawer open={isOpen} onClose={toggleOpen(false)}>
      <AppSideNavMenu onSelect={toggleOpen(false)} />
    </Drawer>
  );
}

function isInvalidKey(type: string, key: string): boolean {
  return type === 'keydown' && (key === 'Tab' || key === 'Shift');
}
