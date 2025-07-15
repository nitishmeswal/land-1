import { Toaster } from 'sonner';
import { Helmet } from 'react-helmet';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Helmet>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;