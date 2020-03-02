import React, { useState, Fragment } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  IconButton,
  Icon,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { IconMat } from '../../shared/enums/icons.enum';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: 'none',
      color: theme.palette.grey[800],
    },
  })
);

export default function PofileMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton onClick={handleMenuBtnClick} color="inherit">
        <Icon>{IconMat.AccountCircle}</Icon>
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted={true}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to={'/auth/account'} className={classes.link}>
            Account
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={'/auth/signout'} className={classes.link}>
            Signout
          </Link>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
