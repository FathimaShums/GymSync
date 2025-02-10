'use client';

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">GymSync</h1>
            </div>
            <div className="flex items-center">
              {user ? (
                <Link 
                  href="/dashboard"
                  className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Dashboard
                </Link>
              ) : (
                <Link 
                  href="/login"
                  className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to GymSync
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Your personalized fitness journey starts here
          </p>
          {!user && (
            <div className="mt-8">
              <Link 
                href="/login"
                className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}