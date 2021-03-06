import React, { useState, Fragment } from 'react';
import {
  createStyles,
  makeStyles,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Theme,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { IconMat } from '../../shared/enums/icons.enum';
import { uiThemeGeneral } from '../../styles/theme/ui-theme';

const useStyles = makeStyles((theme: Theme) => {
  const { link } = uiThemeGeneral(theme);
  return createStyles({
    link: {
      ...link,
      color: theme.palette.grey[800],
    },
  });
});

interface PofileMenuProps {
  // signoutPath: string;
  accountPath: string;
  onSignout: () => void;
}

export default function PofileMenu({ accountPath, onSignout }: PofileMenuProps) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function handleClose() {
    setAnchorEl(null);
  }

  function handleSignout() {
    handleClose();
    onSignout();
  }

  return (
    <Fragment>
      <IconButton onClick={handleMenuBtnClick} color="inherit">
        <Icon>{IconMat.User}</Icon>
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted={true}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to={accountPath} className={classes.link}>
            Account
          </Link>
        </MenuItem>
        <MenuItem onClick={handleSignout}>
          Signout
          {/* <Link to={signoutPath} className={classes.link}>
          </Link> */}
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
