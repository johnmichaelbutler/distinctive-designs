import React from 'react';
import '../styles/globals.css';
import MyLayout from '../layouts/MyLayout';
import Head from 'next/head';
import Seo from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <MyLayout>
      <Head>
        <link rel="icon" href="/logo_white.ico" />
      </Head>
      <Seo />
      <Component {...pageProps} />
    </MyLayout>
  )
}
export default MyApp
