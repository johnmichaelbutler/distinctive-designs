import React from 'react';
import '../styles/globals.css';
import MyLayout from '../layouts/MyLayout';

function MyApp({ Component, pageProps }) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  )
}
export default MyApp
