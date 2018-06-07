import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import {
  addOneItem,
  removeItem,
  removeOneItem,
} from '../../state/cart/actions';
import { Link } from '../../routes';
import AddIcon from '../../assets/svg/baseline-add_circle_outline-24px.svg';
import RemoveIcon from '../../assets/svg/baseline-remove_circle_outline-24px.svg';
import TrashIcon from '../../assets/svg/baseline-delete-24px.svg';
import styles from './styles';

const CartItem = ({
  cart,
  classes,
  dispatch,
  items,
  slug,
}) => {
  const item = items[slug];

  const price = item && item.metadata && item.metadata.price;
  const quantity = cart[slug] || 1;
  const thumbnail = item && item.metadata && item.metadata.thumbnail
    && item.metadata.thumbnail.imgix_url
    && `${item.metadata.thumbnail.imgix_url}?h=56&w=56&fit=crop`;

  return (
    <Fragment>
      <Link route={`/item/${slug}`}>
        <a className={classes.figure}>
          <img
            alt={item.title || ''}
            className={classes.img}
            src={thumbnail}
          />
        </a>
      </Link>
      <Link route={`/item/${slug}`}>
        <a className={classes.titleLink}>
          <Typography className={classes.title}>
            {item.title || ''}
          </Typography>
        </a>
      </Link>
      <div className={classes.subtract}>
        <IconButton
          onClick={() => dispatch(removeOneItem(slug))}
        >
          <RemoveIcon />
        </IconButton>
      </div>
      <Typography className={classes.quantity}>
        {quantity}
      </Typography>
      <div className={classes.add}>
        <IconButton
          onClick={() => dispatch(addOneItem(slug))}
        >
          <AddIcon />
        </IconButton>
      </div>
      <Typography className={classes.unitPrice}>
        ${parseFloat(price).toFixed(2)}
      </Typography>
      <Typography className={classes.totalPrice}>
        ${parseFloat(price * quantity).toFixed(2)}
      </Typography>
      <div className={classes.remove}>
        <IconButton
          onClick={() => dispatch(removeItem(slug))}
        >
          <TrashIcon />
        </IconButton>
      </div>
    </Fragment>
  );
};

CartItem.propTypes = {
  cart: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
  items: state.items,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(CartItem);
