import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../components/Layouts/MainLayout'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>GITS Next Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto py-4 sm:py-32 grid place-items-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">
            Welcome to your <span className="text-blue-600">Next</span> Project!
          </h1>
          <Link href="/admin">Admin</Link>
          <p className="mt-5">You are ready to rock!</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
