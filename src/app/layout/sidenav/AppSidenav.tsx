import React from 'react';
import { Drawer } from '@material-ui/core';

import NavMenu from './NavMenu';

interface AppSidenavProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export default function AppSidenav({ isOpen, setOpen }: AppSidenavProps) {
  function handleClose() {
    setOpen(false);
  }

  return (
    <Drawer open={isOpen} onClose={handleClose}>
      <NavMenu onClose={handleClose} />
    </Drawer>
  );
}
