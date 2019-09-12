import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import StarsIcon from '@material-ui/icons/Stars';
import LanguageIcon from '@material-ui/icons/Language';
import CodeIcon from '@material-ui/icons/Code';
import CollectionsIcon from '@material-ui/icons/Collections';
import StorageIcon from '@material-ui/icons/Storage';
import DevicesIcon from '@material-ui/icons/Devices';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    color: 'rgba(0, 0, 0, 0.87)',
  },
  homeLink: {
    color: '#3f51b5',
    lineHeight: '.1',
  },
  homeSmall: {
    fontSize: '.5rem',
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer(side, false)}
      onKeyDown={props.toggleDrawer(side, false)}>
      <List>
        <Link className={classes.homeLink} to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <div>
              <ListItemText primary="Zakaria Othmane" />
              <div>
                <small className={classes.homeSmall}>
                  Développeur Fullstack
                </small>
              </div>
            </div>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.link} to="/a-propos">
          <ListItem button>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="À Propos" />
          </ListItem>
        </Link>
        <Link className={classes.link} to="/competences">
          <ListItem button>
            <ListItemIcon>
              <StarsIcon />
            </ListItemIcon>
            <ListItemText primary="Mes Compétences" />
          </ListItem>
        </Link>
        <Link className={classes.link} to="/langages">
          <ListItem button>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary="Langages" />
          </ListItem>
        </Link>
        <Link className={classes.link} to="/frameworks">
          <ListItem button>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Frameworks" />
          </ListItem>
        </Link>

        <Link className={classes.link} to="/orm-odm-db">
          <ListItem button>
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText primary="ORM et ODM" />
          </ListItem>
        </Link>
        <Link className={classes.link} to="/environements">
          <ListItem button>
            <ListItemIcon>
              <DevicesIcon />
            </ListItemIcon>
            <ListItemText primary="Environements" />
          </ListItem>
        </Link>

        <Link className={classes.link} to="/realisations">
          <ListItem button>
            <ListItemIcon>
              <CollectionsIcon />
            </ListItemIcon>
            <ListItemText primary="Mes Réalisations" />
          </ListItem>
        </Link>
        <Link className={classes.link} to="/contact">
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer
        open={props.state.left}
        onClose={props.toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
