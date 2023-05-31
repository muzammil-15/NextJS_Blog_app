import React, {useState, useEffect} from 'react';
import { Layout } from '@/components';

import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  ) 
}
