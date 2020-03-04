import React, { ErrorInfo } from 'react';
import { Typography, makeStyles, Theme } from '@material-ui/core';
import { uiThemeContainers } from '../../../styles/theme/ui-theme';

interface ErrorBoundaryMessageProps {
  message: string;
  error?: Error;
  errorInfo?: ErrorInfo;
}

const useStyles = makeStyles((theme: Theme) => {
  const { contentGreyRound } = uiThemeContainers(theme);
  return {
    contentGreyRound,
    message: {
      color: theme.palette.common.white,
    },
  };
});

export function ErrorBoundaryMessage({
  message,
  error,
  errorInfo,
}: ErrorBoundaryMessageProps) {
  const classes = useStyles();
  return (
    <div className={classes.contentGreyRound}>
      <Typography className={classes.message} align="center" gutterBottom={true}>
        {message}
      </Typography>
      {error != null && (
        <Typography className={classes.message} align="center" gutterBottom={true}>
          {error.toString()}
        </Typography>
      )}
      {errorInfo != null && (
        <Typography className={classes.message} align="center" gutterBottom={true}>
          {errorInfo.componentStack}
        </Typography>
      )}
    </div>
  );
}
