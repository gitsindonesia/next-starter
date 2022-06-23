import { useSession } from 'next-auth/react';
import Footer from './Footer';
import Header from './Header';

export default function AuthenticatedPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <p>Unauthenticated</p>;
  }

  return (
    <div>
    <Header />
      {children}
    <Footer />
    </div>);
}
