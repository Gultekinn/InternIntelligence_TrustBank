"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboardIcon, User, ArrowRight, FileText, Clock, Settings, ChevronLeft, ChevronRight } from 'lucide-react'; // Lucide Icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Accordion kontrolü için state
  const [sidebarVisible, setSidebarVisible] = useState(true); // Sidebar açma/kapama için state

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  return (
    <div className={`h-screen ${sidebarVisible ? 'w-72' : 'w-20'} bg-gray-800 text-white p-5 transition-all flex flex-col`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-8">
        <div className={`text-xl font-bold ${!sidebarVisible && 'hidden'}`}>TrustBank</div>
        <button onClick={toggleSidebar} className="text-white">
          {sidebarVisible ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <ul className="flex-1">
        <li>
          <Link href="/dashboard" className="block py-3 hover:bg-gray-700 rounded-md flex items-center">
            <LayoutDashboardIcon className="mr-3" /> {sidebarVisible && 'Dashboard'}
          </Link>
        </li>
        <li>
          <Link href="/dashboard/account" className="block py-3 hover:bg-gray-700 rounded-md flex items-center">
            <User className="mr-3" /> {sidebarVisible && 'Account Details'}
          </Link>
        </li>
        <li>
          <div onClick={toggleMenu} className="block py-3 hover:bg-gray-700 rounded-md cursor-pointer flex items-center">
            <ArrowRight className="mr-3" /> {sidebarVisible && 'Transfer Funds'}
            <span className="ml-auto">{isOpen ? '-' : '+'}</span>
          </div>
          {isOpen && (
            <ul className="ml-5 mt-2">
              <li>
                <Link href="/dashboard/transfer/quick" className="block py-2 hover:bg-gray-600 rounded-md">
                  Quick Transfer
                </Link>
              </li>
              <li>
                <Link href="/dashboard/transfer/scheduled" className="block py-2 hover:bg-gray-600 rounded-md">
                  Scheduled Transfer
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/dashboard/bills" className="block py-3 hover:bg-gray-700 rounded-md flex items-center">
            <FileText className="mr-3" /> {sidebarVisible && 'Bill Payments'}
          </Link>
        </li>
        <li>
          <Link href="/dashboard/history" className="block py-3 hover:bg-gray-700 rounded-md flex items-center">
            <Clock className="mr-3" /> {sidebarVisible && 'Transaction History'}
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings" className="block py-3 hover:bg-gray-700 rounded-md flex items-center">
            <Settings className="mr-3" /> {sidebarVisible && 'Settings'}
          </Link>
        </li>
      </ul>

      {/* Optional Footer (if needed for additional items) */}
      <div className="mt-auto">
        <p className="text-sm text-gray-400 text-center">{sidebarVisible && '© TrustBank 2025'}</p>
      </div>
    </div>
  );
};

export default Sidebar;
