import type { NextPage } from 'next';
import Link from 'next/link';
import Button, { ButtonSizes, sizes } from '../components/Button/Button';
import Dropdown from '../components/Dropdown/Dropdown';

const Components: NextPage = () => {
  return (
    <div className="container mx-auto py-4 sm:py-6">
      <h1 className="text-3xl font-bold mb-5">Component Library</h1>

      <h1 className="text-xl font-bold mb-2 text-gray-800">Buttons</h1>
      <div className="space-x-2">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
      </div>

      <h1 className="text-xl font-bold mt-5 mb-2 text-gray-800">
        Button Sizes
      </h1>
      <div className="flex items-end gap-2">
        {Object.keys(sizes).map((size) => (
          <Button size={size as ButtonSizes} key={size}>
            button: {size}
          </Button>
        ))}
      </div>

      <div className="mt-5">
        <h1 className="text-xl font-bold mb-2 text-gray-800">Dropdown</h1>
        <Dropdown />
      </div>

      <p className="mt-5">
        Add more component{' '}
        <Link href="https://headlessui.dev/" target="_blank" rel="noopener">
          <a className="font-semibold text-blue-600 hover:underline">here</a>
        </Link>
      </p>
    </div>
  );
};

export default Components;
