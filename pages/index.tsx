import Head from 'next/head';
import Layout from '../components/Layout';
import Main from '../components/Main';

function HomePage() {
  return (
    <Layout home={true}>
      <Head>
        <title>Astro | Find yourself</title>
      </Head>
      <Main></Main>
    </Layout>
  );
}

export default HomePage;
