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
  signinPath: string;
  accountPath: string;
}

export default function PofileMenu({ signinPath, accountPath }: PofileMenuProps) {
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
          <Link to={accountPath} className={classes.link}>
            Account
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={signinPath} className={classes.link}>
            Signout
          </Link>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
