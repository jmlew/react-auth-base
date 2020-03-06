import React, { Fragment } from 'react';
import { makeStyles, Avatar, Icon, Theme, Typography } from '@material-ui/core';

import { IconMat } from '../../enums/icons.enum';

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    marginBottom: theme.spacing(5),
  },
}));

interface TitleAvatarProps {
  title: string;
  icon: IconMat;
}

export function TitleAvatar({ title, icon }: TitleAvatarProps) {
  const classes = useStyles();
  return (
    <Fragment>
      <Avatar className={classes.avatar}>
        <Icon>{icon}</Icon>
      </Avatar>
      <Typography
        component="h1"
        variant="h5"
        className={classes.title}
        gutterBottom={true}
      >
        {title}
      </Typography>
    </Fragment>
  );
}
