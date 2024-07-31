import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import '../i18n';
import SpriteLoader from '../сomponents/SpriteLoader/SpriteLoader';
import store, { persistor } from '@frontend/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <SpriteLoader />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />;
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
