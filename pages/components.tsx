import type { NextPage } from 'next';
import Link from 'next/link';
import Button, {
  ButtonSizes,
  ButtonVariants,
  sizes,
  variants,
} from '../components/Button/Button';
import Dropdown from '../components/Dropdown/Dropdown';

const Components: NextPage = () => {
  return (
    <div className="container mx-auto py-4 sm:py-6">
      <h1 className="text-3xl font-bold mb-5">Component Library</h1>

      <h2 className="text-xl font-bold mb-3 text-gray-800">Buttons</h2>
      <h3 className="text-lg font-medium mb-2 text-gray-700">Variants</h3>
      <div className="space-x-2">
        {Object.keys(variants).map((variant) => (
          <Button variant={variant as ButtonVariants} key={variant}>
            {variant}
          </Button>
        ))}
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-medium mb-2 text-gray-700">Sizes</h3>
        <div className="flex items-end gap-2">
          {Object.keys(sizes).map((size) => (
            <Button size={size as ButtonSizes} key={size}>
              button: {size}
            </Button>
          ))}
        </div>
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
