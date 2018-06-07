import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Hits } from 'react-instantsearch/dom';

import { withStyles } from '@material-ui/core/styles';

import Item from '../Item';
import Pagination from '../Pagination';
import Search from '../Search';
import styles from './styles';

const Results = ({ classes, className }) => (
  <div
    className={classnames({
      [classes.root]: true,
      [className]: !!className,
    })}
  >
    <Search />
    <Hits hitComponent={Item} />
    <Pagination />
  </div>
);

Results.defaultProps = {
  className: undefined,
};

Results.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(Results);
