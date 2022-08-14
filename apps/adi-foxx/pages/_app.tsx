import { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Provider, createClient } from 'urql';

import '../styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

const apiClient = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });
const productionMode = process.env.NEXT_PUBLIC_BACKEND_PRODUCTION === 'true';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to adi-foxx!</title>
      </Head>
      <Provider value={apiClient}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: productionMode,
});
