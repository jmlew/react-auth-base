import React from 'react';
import { Snackbar, SnackbarOrigin } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import { useAlert, AlertContextValue } from '../context';
import { AlertAlign, AlertType } from '../enums/alert.enum';

interface AlertMessageProps {
  isShown: boolean;
  onClose: () => void;
}

export function AlertMessage({ isShown, onClose }: AlertMessageProps) {
  const alertContext: AlertContextValue = useAlert();
  const { message, type, duration, align } = alertContext.alert;
  const anchorOrigin = align != null ? getAlignment(align) : getAlignmentByType(type);
  return (
    <Snackbar
      open={isShown}
      autoHideDuration={duration || 4000}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <MuiAlert onClose={onClose} elevation={6} variant="filled" severity={type}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

function getAlignmentByType(type: AlertType): SnackbarOrigin {
  switch (type) {
    case AlertType.Error:
      return getAlignment(AlertAlign.TopCenter);
    case AlertType.Success:
    default:
      return getAlignment(AlertAlign.BottomCenter);
  }
}

function getAlignment(align: AlertAlign): SnackbarOrigin {
  switch (align) {
    case AlertAlign.TopCenter:
      return {
        vertical: 'top',
        horizontal: 'center',
      };
    case AlertAlign.BottomCenter:
    default:
      return {
        vertical: 'bottom',
        horizontal: 'center',
      };
  }
}
