import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/pages/Layout';
import { BookProvider } from '@/contexts/BookContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wrap the app in the BookProvider context and Layout
    <BookProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BookProvider>
  );
}
