import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import classnames from 'classnames';
import { RefinementList } from 'react-instantsearch/dom';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { fetchBrandIfNeeded } from '../../state/brands/actions';
import { fetchCategoryIfNeeded } from '../../state/categories/actions';
import { hideDrawer } from '../../state/modals/actions';
import CloseIcon from '../../assets/svg/baseline-close-24px.svg';
import styles from './styles';

const Drawer = ({
  brands,
  categories,
  classes,
  className,
  dispatch,
  drawerOpen,
}) => (
  <div
    className={classnames({
      [classes.root]: true,
      [className]: !!className,
      [classes.root__closed]: !drawerOpen,
      [classes.root__open]: drawerOpen,
    })}
  >
    <div className={classes.rightBorder} />
    <div className={classes.header}>
      <IconButton
        onClick={() => dispatch(hideDrawer())}
      >
        <CloseIcon className={classes.closeIcon} />
      </IconButton>
    </div>
    <img
      alt=""
      className={classes.logo}
      src="https://cosmic-s3.imgix.net/68adddf0-69cc-11e8-a7c7-51f210bd26e5-logo.png?w=56"
    />
    <hr className={classes.divider} />
    <Typography className={classes.sectionTitle}>
      Categories
    </Typography>
    <RefinementList
      attribute="categories"
      transformItems={items =>
        items
          .map((item) => {
            try {
              return {
                ...item,
                label: categories[item.label].val,
              };
            } catch (e) {
              dispatch(fetchCategoryIfNeeded(item.label));
              return undefined;
            }
          })
          .filter(item => item && !!item.label)
      }
    />
    <Typography className={classes.sectionTitle}>
      Brands
    </Typography>
    <RefinementList
      attribute="brand"
      transformItems={items =>
        items
          .map((item) => {
            try {
              return {
                ...item,
                label: brands[item.label].val,
              };
            } catch (e) {
              dispatch(fetchBrandIfNeeded(item.label));
              return undefined;
            }
          })
        .filter(item => item && !!item.label)
      }
    />
  </div>
);

Drawer.defaultProps = {
  brands: {},
  categories: {},
  className: undefined,
};

Drawer.propTypes = {
  brands: PropTypes.object,
  categories: PropTypes.object,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  brands: state.brands,
  categories: state.categories,
  drawerOpen: state.modals.drawer,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(Drawer);
