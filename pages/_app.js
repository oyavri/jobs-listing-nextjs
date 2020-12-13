import React from 'react';
import Layout from '../layouts/Layout';
import '../styles/globals.css';

function JobsListingApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default JobsListingApp
