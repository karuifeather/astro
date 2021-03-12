import Head from 'next/head';
import Footer from './Footer';
import styles from './layout.module.scss';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout = ({ home, children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.png' />
        <meta
          name='description'
          content='Find your horoscope and know more about yourself.'
        />

        <meta
          name='og:title'
          content='Discover yourself and your destiny to better shape your life.'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Navbar />
      {children}
      <Footer home={home}></Footer>
    </div>
  );
};

export default Layout;
