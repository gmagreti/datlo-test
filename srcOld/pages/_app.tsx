import '../styles/global.ts';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/global';
import AppProvider from '../hook';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <AppProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
