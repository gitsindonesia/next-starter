import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
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

        <nav className="flex gap-4 items-center">
          <Link href="/">
            <a className="hover:font-semibold">Home</a>
          </Link>
          <Link href="/auth/login">
            <a className="hover:font-semibold">Login</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
