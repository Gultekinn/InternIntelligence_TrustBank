'use client';

import { auth } from '@/firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    document.cookie = 'auth-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
