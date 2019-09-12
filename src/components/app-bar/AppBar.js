import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {connect} from 'react-redux';
import {logout} from './../../redux/actions/user';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = props => {
  const classes = useStyles();

  const {user} = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={props.toggleDrawer('left', true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Zakaria Othmane
          </Typography>
          {user.isLoggedIn ? (
            <Button color="inherit" onClick={props.logout}>
              <ExitToAppIcon />
            </Button>
          ) : (
            <Button color="inherit">
              <Link to="/signin" style={{color: 'white'}}>
                <PersonIcon />
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({user}) => ({user});

export default connect(
  mapStateToProps,
  {logout},
)(ButtonAppBar);
