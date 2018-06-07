import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const LoadingOverlay = ({ classes, visible }) => (
  <div
    className={classnames({
      [classes.root]: true,
      [classes.root__hidden]: !visible,
      [classes.root__visible]: visible,
    })}
  >
    <CircularProgress className={classes.progress} />
  </div>
);

LoadingOverlay.defaultProps = {
  visible: false,
};

LoadingOverlay.propTypes = {
  classes: PropTypes.object.isRequired,
  visible: PropTypes.bool,
};

export default withStyles(styles)(LoadingOverlay);
