/* eslint-disable @next/next/no-sync-scripts */
import Header from '@/components/Header';
import type { AppProps } from 'next/app';
import * as gtag from '../lib/gtag';
import Script from 'next/script';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setOneVh();
    window.addEventListener('resize', setOneVh);
    return () => {
      window.removeEventListener('resize', setOneVh);
    };
  }, []);

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />

      <Script
        id='ga4_init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname
              });
            `,
        }}
      />

      <Header />
      <Component {...pageProps} />
    </>
  );
}
