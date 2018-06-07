import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const CheckoutDialog = ({
  classes,
  fullScreen,
  onClose,
  open,
}) => (
  <Dialog
    aria-labelledby="checkout-dialog-title"
    fullScreen={fullScreen}
    onClose={onClose}
    open={open}
  >
    <DialogTitle id="checkout-dialog-title">
      Checkout
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        <span className={classes.span}>
          This is just a demo store. Thanks for checking it out!
        </span>
        <span className={classes.span}>
          Feel free to finish building and customizing it yourself
          or you can contact me to do it for you!
        </span>
        <span className={classes.footer}>
          <a className={classes.a} href="https://chriso.io">
            <img
              alt=""
              className={classes.img}
              height={48}
              src="https://cosmic-s3.imgix.net/e8e18ba0-5e20-11e8-8b90-49cb251195d1-IMG_20160627_124900.jpg?w=48&h=48&fit=crop"
              width={48}
            />
            <div className={classes.signature}>
              Chris Overstreet
              <br />
              https://chriso.io
            </div>
          </a>
        </span>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

CheckoutDialog.defaultProps = {
  open: false,
};

CheckoutDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default compose(
  withStyles(styles),
  withMobileDialog(),
)(CheckoutDialog);
