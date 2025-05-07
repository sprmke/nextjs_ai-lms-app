'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { LayoutDashboard, Shield, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
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
    <div className="h-screen shadow-md p-5 flex flex-col gap-y-7 justify-between">
      <div className="flex flex-col gap-y-5">
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
          <Link href="/create">
            <Button className="w-full">+ Create New</Button>
          </Link>
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
      <div className="flex flex-col gap-y-1 border p-3 bg-slate-100 rounded-lg">
        <p className="text-lg">Available credits : 5</p>
        <Progress value={50} />
        <p className="text-sm ">1 out of 5 credits used</p>
        <Link href="/dashboard/upgrade" className="text-primary text-xs">
          Upgrade to create more
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
