/* Adapted from: https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js */
import React, { Fragment } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import JssProvider from 'react-jss/lib/JssProvider';
import flush from 'styled-jsx/server';

import getPageContext from '../utils/getPageContext';

class CustomDocument extends Document {
  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>Cosmic Store</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            rel="stylesheet"
          />
          <link
            href="/_next/static/style.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

CustomDocument.getInitialProps = (ctx) => {
  const pageContext = getPageContext();
  const page = ctx.renderPage(Component => props => (
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      <Component pageContext={pageContext} {...props} />
    </JssProvider>
  ));

  return {
    ...page,
    pageContext,
    styles: (
      <Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        {flush() || null}
      </Fragment>
    ),
  };
};

export default CustomDocument;
