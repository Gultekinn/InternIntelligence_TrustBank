import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to TrustBank</h1>
      <p className="text-gray-600 mt-4 text-center">
        Manage your accounts, pay bills, and transfer funds easily.
      </p>
      <div className="mt-6">
        <Link href="/auth/login">
          <button className="bg-blue-600 text-white border-blue-600 px-4 py-2 rounded-lg mr-4 hover:bg-blue-700">
            Sign In
          </button>
        </Link>
        <Link href="/auth/register">
          <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg mr-4 hover:bg-blue-600 hover:text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
