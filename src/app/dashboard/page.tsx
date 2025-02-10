'use client';

import { useAuth } from '@/contexts/AuthContext';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to GymSync</h1>
      <p className="mt-4">Logged in as: {user.email}</p>
      <button
        onClick={() => auth.signOut()}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}