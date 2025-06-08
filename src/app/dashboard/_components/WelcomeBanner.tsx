import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import React from 'react';

export default async function WelcomeBanner() {
  const user = await currentUser();

  return (
    <div className="flex items-center gap-x-6 p-5 bg-blue-500 w-full text-white rounded-lg">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      <div>
        <h3 className="font-bold text-3xl">Hello, {user?.fullName}</h3>
        <p className="text-lg">Let&apos;s continue learning!</p>
      </div>
    </div>
  );
}
