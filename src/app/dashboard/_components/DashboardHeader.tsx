import React from 'react';
import { UserButton } from '@clerk/nextjs';

function DashboardHeader() {
  return (
    <div className="p-5 shadow-md flex justify-end">
      <div className="w-[28px] h-[28px] bg-slate-100 rounded-full flex items-center justify-center">
        <UserButton />
      </div>
    </div>
  );
}

export default DashboardHeader;
