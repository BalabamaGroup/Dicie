import Head from 'next/head';
import React from 'react';

import ThemeDynamic from '@/styles/ThemeDynamic';
import GlobalStyle from '@/styles/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <ThemeDynamic>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Aspid</title>
        </Head>

        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeDynamic>
    </div>
  );
}
