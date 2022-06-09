import { useSession } from 'next-auth/react';
import AuthenticatedPage from '../components/Layouts/AuthenticatedPage';

export default function Profile() {
  const { data: session } = useSession();

  return (
    <AuthenticatedPage>
      <div className="container mx-auto py-6">
        <h1 className="font-semibold text-4xl">Profile</h1>

        <div className="mt-5 space-y-3">
          <div>
            <div className="font-medium text-sm text-gray-600">Name</div>
            <div>{session?.user?.name}</div>
          </div>
          <div>
            <div className="font-medium text-sm text-gray-600">Email</div>
            <div>{session?.user?.email}</div>
          </div>
        </div>
      </div>
    </AuthenticatedPage>
  );
}
