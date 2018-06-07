import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles';

import CloseIcon from '../../assets/svg/baseline-close-24px.svg';
import styles from './styles';

const ItemAddedSnackbar = ({
  classes,
  title,
  onClose,
  open,
}) => (
  <Snackbar
    action={[
      <IconButton
        aria-label="Close"
        className={classes.close}
        key="close"
        onClick={onClose}
      >
        <CloseIcon className={classes.closeIcon} />
      </IconButton>,
    ]}
    anchorOrigin={{
      horizontal: 'center',
      vertical: 'bottom',
    }}
    autoHideDuration={2000}
    ContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={
      <span id="message-id">
        {`Added '${title}' to cart!'`}
      </span>}
    open={open}
    onClose={onClose}
  />
);

ItemAddedSnackbar.defaultProps = {
  open: false,
};

ItemAddedSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ItemAddedSnackbar);
