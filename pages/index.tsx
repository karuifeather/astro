import { useRouter } from 'next/router';
import Head from 'next/head';
import { getSign } from 'horoscope';
import Layout from '../components/Layout';
import Main from '../components/Main';
import { GetSign } from '../components/GetSign';

function HomePage() {
  const router = useRouter();

  const handleSearch = (date: GetSign) => {
    const astroSign: string = getSign(date);
    router.push(`/character-traits/${astroSign.toLowerCase()}`);
  };

  return (
    <Layout home={true}>
      <Head>
        <title>Astro | Discover your origin</title>
      </Head>
      <Main handleSearch={handleSearch} home={true}></Main>
    </Layout>
  );
}

export default HomePage;
