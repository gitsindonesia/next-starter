import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="py-3 border-b bg-white">
      <div className="flex gap-4 container mx-auto items-center justify-between">
        <Image
          src="https://gits.id/wp-content/uploads/2020/09/Logo-Main.png"
          alt="Logo GITS"
          className="h-10"
          width={80}
          height={35}
        />

        <nav className="flex gap-4 items-center">
          <Link href="/">
            <a className="hover:font-semibold">Home</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
