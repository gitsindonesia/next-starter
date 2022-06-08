import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GITS Next Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto py-4 sm:py-32 grid place-items-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">
            Welcome to your <span className="text-blue-600">Next</span> Project!
          </h1>

          <p className="mt-5">You are ready to rock!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
