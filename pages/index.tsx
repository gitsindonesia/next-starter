import type { NextPage } from 'next';
import Button from '../components/Button/Button';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto py-4 sm:py-6">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Button>Button</Button>
      <Button variant="primary">Button</Button>
    </div>
  );
};

export default Home;
