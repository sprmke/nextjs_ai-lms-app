import React from 'react';

import { eq } from 'drizzle-orm';
import { currentUser } from '@clerk/nextjs/server';

import { db } from './config/db';
import { USER_TABLE } from './config/schema';

export default async function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  console.log('user::', user);

  const { username, firstName, emailAddresses } = user ?? {};
  const [firstEmailAddress] = emailAddresses ?? [];
  const { emailAddress: email } = firstEmailAddress ?? {};

  console.log('email::', email);

  // Check if user already exists
  const existingUsers = email
    ? await db.select().from(USER_TABLE).where(eq(USER_TABLE.email, email))
    : null;

  console.log('existingUsers::', existingUsers);

  // If not, add to database
  if (!existingUsers?.length) {
    const newUser = await db
      .insert(USER_TABLE)
      .values({
        email,
        userName: username ?? firstName ?? '',
      })
      .returning({
        id: USER_TABLE.id,
        userName: USER_TABLE.userName,
        email: USER_TABLE.email,
        isMember: USER_TABLE.isMember,
      });

    console.log('newUser::', newUser);
  }

  return <div>{children}</div>;
}
