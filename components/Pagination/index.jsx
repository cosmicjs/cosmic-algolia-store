import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as AlgoliaPagination } from 'react-instantsearch/dom';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Pagination = ({ classes }) => (
  <div className={classes.root}>
    <AlgoliaPagination />
  </div>
);

Pagination.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pagination);
