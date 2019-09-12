import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
    boxSizing: 'border-box',
  },
  textField2: {
    width: '80%',
  },
  h2: {
    color: '#2ecc71',
  },
  formWrapper: {
    width: '95%',
    margin: 'auto',
  },
  button: {
    margin: theme.spacing(1),
    textAlign: 'right',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  buttonBlock: {
    textAlign: 'center',
  },
}));

const ContactForm = props => {
  const [state, setState] = useState({
    email: 'test@test.com',
    message: 'Je souhaiterais vous contacter...',
  });

  const onChange = e => {
    const { value, name } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/contacts', state)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log('[Erreur] : ' + err));
  };

  const classes = useStyles();
  return (
    <div className="ContactForm">
      <h2 className={classes.h2}>Contactez-moi!</h2>
      <p>N'hésitez pas à me contacter pour tout type de projet web</p>
      <div className={classes.formWrapper}>
        <form onSubmit={onSubmit}>
          <div className={classes.textField}>
            <Grid
              style={{ width: '100%' }}
              container
              spacing={1}
              alignItems="flex-end"
              justify="center">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid style={{ width: '85%' }} item>
                <TextField
                  style={{ width: '100%' }}
                  id="input-with-icon-grid"
                  onChange={onChange}
                  name="email"
                  label="E-mail"
                  value={state.email}
                />
              </Grid>
            </Grid>
          </div>

          <TextField
            id="outlined-textarea"
            name="message"
            onChange={onChange}
            label="Votre message"
            placeholder="Je souhaiterais échanger avec vous au sujet de..."
            value={state.message}
            multiline
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <div className={classes.buttonBlock}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={classes.button}>
              Envoyer
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
