import React from 'react';
import {
  makeStyles,
  Theme,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    marginTop: theme.spacing(2),
  },
}));

interface SigninFormProps {
  registerPath: string;
  forgotPwPath: string;
  onSubmit: () => void;
}

export default function SigninForm({
  registerPath,
  forgotPwPath,
  onSubmit,
}: SigninFormProps) {
  const classes = useStyles();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    onSubmit();
    event.preventDefault();
  }

  return (
    <form className={classes.form} noValidate={true} onSubmit={handleSubmit}>
      <TextField
        className={classes.input}
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth={true}
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
      />
      <TextField
        className={classes.input}
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth={true}
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth={true}
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container={true}>
        <Grid item={true} xs={true}>
          <Link to={forgotPwPath}>Forgot password?</Link>
        </Grid>
        <Grid item={true}>
          <Link to={registerPath}>Don't have an account? Register</Link>
        </Grid>
      </Grid>
    </form>
  );
}
