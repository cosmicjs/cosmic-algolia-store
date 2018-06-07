import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Headroom from 'react-headroom';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';

import { Router } from '../../routes';
import CartIcon from '../../assets/svg/baseline-shopping_cart-24px.svg';
import MenuIcon from '../../assets/svg/baseline-menu-24px.svg';
import styles from './styles';

const Header = ({
  classes,
  count,
  onShopClick,
}) => (
  <Headroom>
    <header className={classes.root}>
      <div className={classes.left}>
        <Button
          onClick={onShopClick}
        >
          <MenuIcon className={classes.menuIcon} />
          <span className={classes.label}>
            Shop
          </span>
        </Button>
      </div>
      <div>
        <img
          alt="Cosmic Store"
          className={classes.logo}
          src="https://cosmic-s3.imgix.net/d88da660-6859-11e8-86a7-7f4f286b8a7f-logo.png"
        />
      </div>
      <div className={classes.right}>
        <Badge
          badgeContent={count}
          classes={{
            badge: classnames({
              [classes.badge]: true,
              [classes.badge__hidden]: !count,
              [classes.badge__visible]: !!count,
            }),
          }}
          color="primary"
        >
          <Button
            onClick={() => Router.pushRoute('/cart')}
          >
            <span className={classes.label}>
              Cart
            </span>
            <CartIcon className={classes.cartIcon} />
          </Button>
        </Badge>
      </div>
    </header>
  </Headroom>
);

Header.defaultProps = {
  onShopClick: () => Router.pushRoute('/'),
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onShopClick: PropTypes.func,
};

const mapStateToProps = (state) => {
  try {
    const count = Object.values(state.cart)
      .reduce((sum, quantity) => sum + quantity, 0);
    return { count };
  } catch (e) {
    return { count: 0 };
  }
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(Header);
