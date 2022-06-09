import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Header() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-3 border-b bg-white">
      <div className="flex gap-4 container px-4 sm:px-0 mx-auto items-center justify-between">
        <Link href="/">
          <a>
            <Image
              src="https://gits.id/wp-content/uploads/2020/09/Logo-Main.png"
              alt="Logo GITS"
              className="h-10"
              width={80}
              height={35}
            />
          </a>
        </Link>

        <button
          type="button"
          className="inline-block md:hidden"
          onClick={() => setIsOpen((prev) => (isOpen = !prev))}
        >
          <Icon icon="mdi-light:menu" className="w-6 h-6" />
        </button>

        <nav
          className={`${
            isOpen ? 'flex' : 'hidden sm:flex'
          }  gap-4 items-center fixed sm:static top-20 top:0 bg-white w-full sm:w-auto inset-x-0 sm:inset-auto flex-col sm:flex-row pb-4 sm:pb-0 shadow sm:shadow-none`}
        >
          <Link href="/">
            <a
              className="block px-4 py-2 w-full sm:inline hover:font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </Link>
          <Link href="/auth/login">
            <a
              className="block px-4 py-2 w-full sm:inline hover:font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
