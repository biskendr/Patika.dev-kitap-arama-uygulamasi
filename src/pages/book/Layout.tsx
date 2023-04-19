import Head from 'next/head';
import { FunctionComponent, ReactElement } from 'react';

type LayoutProps = {
  children: ReactElement | object;
  title: string | undefined;
};

const Layout: FunctionComponent<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        {/* Add a Head component to set the page title and favicon */}
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </>
  );
};

export default Layout;
