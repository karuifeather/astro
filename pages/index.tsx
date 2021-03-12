import { useRouter } from 'next/router';
import Head from 'next/head';

import Layout from '../components/Layout';
import Main from '../components/Main';
import { GetSign } from '../components/GetSign';

function HomePage() {
  const router = useRouter();

  const handleSearch = (date: GetSign) => {
    // router.push(`/cancer`);
    console.log(date);
  };

  return (
    <Layout home={true}>
      <Head>
        <title>Astro | Discover your origin</title>
      </Head>
      <Main handleSearch={handleSearch}></Main>
    </Layout>
  );
}

export default HomePage;
