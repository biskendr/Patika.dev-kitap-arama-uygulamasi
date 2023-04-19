import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Book Search App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='container min-h-screen mx-auto py-16'>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
