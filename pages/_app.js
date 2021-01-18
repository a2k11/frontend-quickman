import App from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import { Component } from 'react';

class MyApp extends App {
  static async getInitialProps({ component, ctx }) {
    let pageProps = {};
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // expose query to user
    pageProps.query = ctx.query;
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
