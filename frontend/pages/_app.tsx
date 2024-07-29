import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import '../i18n';
import SpriteLoader from '../сomponents/SpriteLoader/SpriteLoader';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <SpriteLoader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
