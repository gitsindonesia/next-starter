import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { AppContextProvider } from '../store/AppContext';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AppContextProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AppContextProvider>
  );
}

export default MyApp;
