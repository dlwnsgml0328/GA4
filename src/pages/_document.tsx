/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          id='Cookiebot'
          src='https://consent.cookiebot.com/uc.js'
          data-cbid='c686c568-a38f-42b5-978f-28eb0e6bd29c'
          data-blockingmode='auto'
          type='text/javascript'
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
