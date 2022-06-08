import type { NextPage } from 'next';
import Link from 'next/link';
import Button from '../components/Button/Button';
import Dropdown from '../components/Dropdown/Dropdown';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto py-4 sm:py-32 grid place-items-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">
          Welcome to your <span className="text-blue-600">Next</span> Project!
        </h1>

        <p className="mt-5">
          Check out the built-in{' '}
          <Link href="/components">
            <a className="text-blue-600 font-semibold hover:underline">
              components
            </a>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Home;
