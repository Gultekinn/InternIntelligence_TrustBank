import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-5">
      <div className="text-xl font-bold mb-8">TrustBank</div>
      <ul>
        <li>
          <Link href="/dashboard" className="block py-3 hover:bg-gray-700 rounded-md">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard/account" className="block py-3 hover:bg-gray-700 rounded-md">
            Account Details
          </Link>
        </li>
        <li>
          <Link href="/dashboard/transfer" className="block py-3 hover:bg-gray-700 rounded-md">
           Transfer Funds
          </Link>
        </li>
        <li>
          <Link href="/dashboard/bills" className="block py-3 hover:bg-gray-700 rounded-md">
            Bill Payments
          </Link>
        </li>
        <li>
          <Link href="/dashboard/history" className="block py-3 hover:bg-gray-700 rounded-md">
            Transaction History
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings" className="block py-3 hover:bg-gray-700 rounded-md">
         Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
