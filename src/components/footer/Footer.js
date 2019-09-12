import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const style = {
  padding: '.3rem',
};

const Footer = () => {
  return (
    <div className="Footer" style={style}>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {`Développé par Zakaria OTHMANE © - `}
          <Link color="inherit" href="http//www.oz79.fr">
            OZ79.fr {' - '}
          </Link>
          {` ${new Date().getFullYear()} - Tous droits réservés`}
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
