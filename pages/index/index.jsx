import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { InstantSearch } from 'react-instantsearch/dom';

import { withStyles } from '@material-ui/core/styles';

import { toggleDrawer } from '../../state/modals/actions';
import Drawer from '../../components/Drawer';
import Header from '../../components/Header';
// import Layout from '../../components/Layout';
import Results from '../../components/Results';
import styles from './styles';

const IndexPage = ({ classes, dispatch }) => (
  <InstantSearch
    appId={process.env.ALGOLIA_APPLICATION_ID}
    apiKey={process.env.ALGOLIA_SEARCH_ONLY_API_KEY}
    indexName="items"
  >
    <div className={classes.root}>
      <Header onShopClick={() => dispatch(toggleDrawer())} />
      <div className={classes.page}>
        <Drawer />
        <Results />
      </div>
    </div>
  </InstantSearch>
);

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
  connect(),
)(IndexPage);
