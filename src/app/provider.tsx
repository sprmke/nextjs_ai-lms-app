'use client';
import React, { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

import axios from 'axios';

export default function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  console.log('user::', user);

  const checkIsNewUser = async () => {
    const response = await axios.post('/api/create-user', {
      user,
    });

    console.log('response::', response);
  };

  useEffect(() => {
    if (!user) return;
    checkIsNewUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <div>{children}</div>;
}
