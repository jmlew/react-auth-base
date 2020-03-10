import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

interface ErrorMessageAlertProps {
  errorMessage: string;
  onClose: () => void;
}

export function ErrorMessageAlert({ errorMessage, onClose }: ErrorMessageAlertProps) {
  return (
    <Snackbar open={errorMessage !== ''} autoHideDuration={4000} onClose={onClose}>
      <MuiAlert onClose={onClose} elevation={6} variant="filled" severity="error">
        {errorMessage}
      </MuiAlert>
    </Snackbar>
  );
}
