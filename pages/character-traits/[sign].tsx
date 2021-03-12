import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Layout from '../../components/Layout';
import Main from '../../components/Main';
import { getAllSigns, getSignData } from '../../lib/md';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params.sign === 'string') {
    const sign = await getSignData(params.sign);

    return {
      props: {
        sign,
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSigns();
  return {
    paths,
    fallback: true,
  };
};

function HomePage({ sign }) {
  return (
    <Layout>
      <Head>
        <title>{sign.title}</title>
      </Head>
      <Main signData={sign}></Main>
    </Layout>
  );
}

export default HomePage;
