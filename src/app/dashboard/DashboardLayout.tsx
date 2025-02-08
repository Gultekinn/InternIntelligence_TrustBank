// app/dashboard/DashboardLayout.tsx

import Sidebar from '@/components/Sidebar';
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar burada */}
      <Sidebar/>
      <div className="flex-1">
        {children} {/* Burada sadece sayfa içeriği olacak */}
      </div>
    </div>
  );
}
