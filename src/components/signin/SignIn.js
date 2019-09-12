import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from './../../redux/actions/user';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = props => {
  const { user } = props;

  const classes = useStyles();
  const [state, setState] = useState({
    login: 'truc',
    password: 'a',
    rememberme: true,
  });

  const [errorMessage, setErrorMessage] = useState('');

  if (user.isLoggedIn && user.roles.includes('admin')) {
    return <Redirect to="/admin" />;
  }

  const onChange = e => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const onRememberMeChange = e => {
    setState({ ...state, rememberme: e.currentTarget.checked });
  };

  const onSubmit = e => {
    e.preventDefault();

    // VERIFIER LES CHAMPS DU FORMULAIRE
    axios
      .post('/api/users/signin', state)
      .then(res => {
        if (res.data.error) {
          console.log(res);
          // AFFICHER L'ERREUR
          return setErrorMessage(res.data.message);
        }
        setErrorMessage('');
        // ENREGISTRER DANS REDUX
        console.log(res);
        props.updateUser(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
      {errorMessage && (
        <div style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>
          {errorMessage}
        </div>
      )}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            onChange={onChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={state.login}
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={state.password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={onRememberMeChange}
                value="remember"
                checked={state.rememberme}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
  { updateUser },
)(SignIn);
