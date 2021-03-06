import { ReactNode } from 'react';
import Head from 'next/head';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout = ({ children, title = 'Portfolio' }: Props) => {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>{`Angel Martinez | ${title}`}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
