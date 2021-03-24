import React from 'react';
import '../styles/globals.css';
import MyLayout from '../layouts/MyLayout';
import Seo from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <MyLayout>
      <Seo />
      <Component {...pageProps} />
    </MyLayout>
  )
}
export default MyApp
