import React from 'react';
import DashboardHeader from './_components/DashboardHeader';
import Sidebar from './_components/Sidebar';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
