import i18n from '../i18n';
import GlobalStyles from '../styles/GlobalStyles';
import SpriteLoader from '../сomponents/SpriteLoader/SpriteLoader';
import store, { persistor } from '@frontend/redux/store';
import type { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <SpriteLoader />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <Component {...pageProps} />;
            <ToastContainer autoClose={3000} />
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
