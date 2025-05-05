'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { LayoutDashboard, Shield, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Sidebar() {
  const pathname = usePathname();

  const menuList = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
    },
    {
      name: 'Upgrade',
      icon: Shield,
      path: '/dashboard/upgrade',
    },
    {
      name: 'Profile',
      icon: UserCircle,
      path: '/dashboard/profile',
    },
  ];

  return (
    <div className="h-screen shadow-md p-5 flex flex-col gap-y-7">
      <div className="flex items-center gap-2">
        <Image
          src={'/logo.svg'}
          alt="AI LMS App - Logo"
          width={40}
          height={40}
        />
        <h2 className="text-2xl font-bold">AI LMS</h2>
      </div>
      <div className="flex flex-col gap-y-3">
        <Button className="w-full">+ Create New</Button>
        <div className="flex flex-col gap-y-3">
          {menuList.map((menu, index) => (
            <div
              key={index}
              className={`flex gap-5 items-center p-3 hover:bg-slate-200 rounded-lg cursor-pointer ${
                pathname === menu.path && 'bg-slate-200'
              }`}
            >
              <menu.icon />
              <p>{menu.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
