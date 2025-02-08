'use client';
import { useAuth } from '@/firebase/FirebaseProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DashboardLayout from './DashboardLayout';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/auth/login'); 
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <DashboardLayout>
      <div>
        <h1>Welcome, {user?.email}</h1>
        {/* Diğer dashboard içeriği */}
      </div>
    </DashboardLayout>
  );
}
