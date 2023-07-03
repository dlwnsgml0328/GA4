import Header from "@/components/Header";
import type { AppProps } from "next/app";
import Head from "next/head";
import * as gtag from "../lib/gtag";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}');
            `,
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        ></script>
      </Head>

      <Header />
      <Component {...pageProps} />
    </>
  );
}
