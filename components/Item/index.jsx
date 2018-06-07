import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import LoadingOverlay from '../LoadingOverlay';
import { Router } from '../../routes';
import styles from './styles';

class Item extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };

    this.loadingTimeout = undefined;

    this.handleClick = this.handleClick.bind(this);
    this.setLoadingState = this.setLoadingState.bind(this);
  }

  componentWillUnmount() {
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
    this.setLoadingState(false);
  }

  setLoadingState(isLoading) {
    if (!isLoading) {
      this.setState({ loading: false });
      return;
    }
    this.loadingTimeout = setTimeout(() => {
      this.setState({ loading: true });
    }, 1000);
  }

  handleClick() {
    this.setLoadingState(true);
    Router.pushRoute(`/item/${this.props.hit.slug}`);
  }

  render() {
    const { classes, hit } = this.props;
    const { loading } = this.state;

    return (
      <a
        className={classes.root}
        onClick={this.handleClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter') this.handleClick();
        }}
        role="link"
        tabIndex={0}
      >
        <div className={classes.preview}>
          <div className={classes.spacer} />
          <figure className={classes.figure}>
            <img
              alt=""
              className={classes.img}
              src={`https://cosmic-s3.imgix.net/${hit.thumbnail}?w=500&h=500`}
            />
          </figure>
        </div>
        <div className={classes.info}>
          <Typography noWrap className={classes.title}>
            {hit.title}
          </Typography>
          <Typography className={classes.price}>
            ${hit.price}
          </Typography>
        </div>
        <LoadingOverlay visible={loading} />
      </a>
    );
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  hit: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Item);
