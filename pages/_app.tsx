import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Layouts/Header';
import Footer from '../components/Layouts/Footer';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
