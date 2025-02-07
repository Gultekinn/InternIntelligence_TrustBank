import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          TrustBank
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
          <Link href="/login" className="hover:text-gray-200 transition-colors">Login</Link>
          <Link href="/register" className="hover:text-gray-200 transition-colors">Sign Up</Link>
        </div>
        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button className="text-2xl focus:outline-none">
            <i className="fas fa-bars"></i> {/* Mobile Menu Icon (optional) */}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mt-4">
        <Link href="/" className="block py-2 px-4 text-center hover:bg-blue-700">Home</Link>
        <Link href="/login" className="block py-2 px-4 text-center hover:bg-blue-700">Login</Link>
        <Link href="/register" className="block py-2 px-4 text-center hover:bg-blue-700">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
