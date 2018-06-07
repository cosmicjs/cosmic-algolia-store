import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Header from '../Header';
import styles from './styles';

const Layout = ({ children, classes }) => (
  <div className={classes.root}>
    <Header />
    {children}
  </div>
);

Layout.defaultProps = {
  children: undefined,
};

Layout.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
