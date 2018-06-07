import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CartItem from '../../components/CartItem';
import CheckoutDialog from '../../components/CheckoutDialog';
import Layout from '../../components/Layout';
import styles from './styles';

class CartPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checkoutDialogOpen: false,
    };

    this.toggleCheckoutDialog = this.toggleCheckoutDialog.bind(this);
  }

  toggleCheckoutDialog() {
    this.setState({ checkoutDialogOpen: !this.state.checkoutDialogOpen });
  }

  render() {
    const {
      cart,
      classes,
      items,
    } = this.props;
    const { checkoutDialogOpen } = this.state;

    let total;
    try {
      total = parseFloat(Object.keys(cart)
        .reduce((sum, key) => sum + (items[key].metadata.price * cart[key]), 0))
        .toFixed(2);
    } catch (e) {
      // Do nothing
    }

    return (
      <Layout>
        <div className={classes.root}>
          <div className={classes.items}>
            {
              Object.keys(cart).map(slug => (
                <CartItem
                  item={cart[slug]}
                  key={slug}
                  slug={slug}
                />
              ))
            }
          </div>
          {
            total && total !== '0.00' &&
            <div>
              <Typography className={classes.totalLabel}>
                Total
              </Typography>
              <Typography className={classes.total}>
                ${total}
              </Typography>
            </div>
          }
          {
            (!total || total === '0.00') &&
            <Typography className={classes.emptyCart}>
              Your cart is empty
            </Typography>
          }
          <Button
            className={classes.submitBtn}
            color="primary"
            disabled={!total || total === '0.00'}
            onClick={this.toggleCheckoutDialog}
            variant="raised"
          >
            Check Out
          </Button>
          <CheckoutDialog
            onClose={this.toggleCheckoutDialog}
            open={checkoutDialogOpen}
          />
        </div>
      </Layout>
    );
  }
}

CartPage.propTypes = {
  cart: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
  items: state.items,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(CartPage);
