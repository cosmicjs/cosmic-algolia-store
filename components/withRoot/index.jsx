/* source: https://github.com/mui-org/material-ui/blob/master/examples/nextjs/src/withRoot.js */
import React from 'react';
import PropTypes from 'prop-types';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import getPageContext from '../../utils/getPageContext';

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.pageContext = this.props.pageContext || getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    pageContext = null;

    render() {
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <CssBaseline />
          <Component {...this.props} />
        </MuiThemeProvider>
      );
    }
  }

  WithRoot.defaultProps = {
    pageContext: undefined,
  };

  WithRoot.propTypes = {
    pageContext: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

  WithRoot.getInitialProps = (ctx) => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

export default withRoot;
