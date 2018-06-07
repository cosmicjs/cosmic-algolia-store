import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ItemAddedSnackbar from '../../components/ItemAddedSnackbar';
import Layout from '../../components/Layout';
import bucket from '../../config';
import CartIcon from '../../assets/svg/baseline-shopping_cart-24px.svg';
import { addOneItem } from '../../state/cart/actions';
import styles from './styles';

const extractImagesFromMetafields = (metafields) => {
  if (!metafields) return [];

  // Add thumbnail (primary) image first
  const primaryImage = metafields
    .filter(metafield => metafield.key === 'thumbnail')
    .map(metafield => ({
      original: `${metafield.imgix_url}?w=400`,
      thumbnail: `${metafield.imgix_url}?h=100&w=100&fit=crop`,
    }));

  const additionalImages = metafields
    .filter(metafield => metafield.key !== 'thumbnail' && !!metafield.imgix_url)
    .map(metafield => ({
      original: `${metafield.imgix_url}?w=400`,
      originalAlt: metafield.title,
      originalTitle: metafield.title,
      thumbnail: `${metafield.imgix_url}?h=100&w=100&fit=crop`,
      thumbnailAlt: metafield.title,
      thumbnailTitle: metafield.title,
    }));

  return [
    ...primaryImage,
    ...additionalImages,
  ];
};

class ItemPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      itemAddedSnackbarOpen: false,
    };

    this.images = extractImagesFromMetafields(props.metafields);

    this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
    this.toggleItemAddedSnackbar = this.toggleItemAddedSnackbar.bind(this);
  }

  handleAddToCartClick() {
    this.toggleItemAddedSnackbar();
    this.props.dispatch(addOneItem(this.props.slug));
  }

  toggleItemAddedSnackbar() {
    this.setState({ itemAddedSnackbarOpen: !this.state.itemAddedSnackbarOpen });
  }

  render() {
    const {
      classes,
      content,
      metadata,
      title,
    } = this.props;
    const { itemAddedSnackbarOpen } = this.state;

    return (
      <Layout>
        <div className={classes.root}>
          <Typography
            className={classes.title}
            variant="title"
          >
            {title}
          </Typography>
          <ImageGallery
            additionalClass={classes.imageGallery}
            items={this.images}
            showPlayButton={false}
          />
          <div className={classes.content}>
            <Typography
              className={classes.main}
              component="main"
            >
              {/* eslint-disable-next-line react/no-danger */}
              <span dangerouslySetInnerHTML={{ __html: content }} />
            </Typography>
          </div>
        </div>
        <div className={classes.cartButtonContainer}>
          <Button
            classes={{
              root: classes.cartButton,
            }}
            color="primary"
            onClick={this.handleAddToCartClick}
            variant="raised"
          >
            ${metadata && metadata.price}
            <CartIcon className={classes.cartIcon} />
          </Button>
        </div>
        <ItemAddedSnackbar
          open={itemAddedSnackbarOpen}
          onClose={this.toggleItemAddedSnackbar}
          title={title}
        />
      </Layout>
    );
  }
}

ItemPage.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  metadata: PropTypes.object.isRequired,
  metafields: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ItemPage.getInitialProps = async ({ query }) => {
  try {
    const item = await bucket.getObject({ slug: query.slug });
    return { ...item.object };
  } catch (e) {
    return { slug: query && query.slug };
  }
};

export default compose(
  withStyles(styles),
  connect(),
)(ItemPage);
