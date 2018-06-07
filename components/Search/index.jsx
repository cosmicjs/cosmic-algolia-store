import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SearchBox } from 'react-instantsearch/dom';

import { withStyles } from '@material-ui/core/styles';

import AlgoliaIcon from '../../assets/svg/algolia.svg';
import SearchIcon from '../../assets/svg/baseline-search-24px.svg';
import styles from './styles';

const Search = ({ classes, className }) => (
  <div
    className={classnames({
      [classes.root]: true,
      [className]: !!className,
    })}
  >
    <SearchBox
      submit={
        <SearchIcon className={classes.searchIcon} />
      }
    />
    <AlgoliaIcon className={classes.algoliaIcon} />
  </div>
);

Search.defaultProps = {
  className: undefined,
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(Search);
