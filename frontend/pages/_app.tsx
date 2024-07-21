import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../i18n';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
