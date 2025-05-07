import { eq } from 'drizzle-orm';
import { inngest } from '@/inngest/client';

import { db } from '@/app/config/db';
import { USERS_TABLE } from '@/app/config/schema';

export const helloWorld = inngest.createFunction(
  { id: 'hello-world' },
  { event: 'test/hello.world' },
  async ({ event, step }) => {
    await step.sleep('wait-a-moment', '1s');
    return { message: `Hello ${event.data.email}!` };
  }
);

export const createNewUser = inngest.createFunction(
  { id: 'create-user' },
  { event: 'user.create' },
  async ({ event, step }) => {
    // Step to check user and create one if not found on database
    await step.run(
      'Check user and create one if not found on database',
      async () => {
        const { user } = event.data ?? {};
        const { username, firstName, emailAddresses } = user ?? {};
        const [firstEmailAddress] = emailAddresses ?? [];
        const email = firstEmailAddress?.emailAddress;

        // Check if user already exists
        const existingUsers = await db
          .select()
          .from(USERS_TABLE)
          .where(eq(USERS_TABLE.email, email));

        console.log('existingUsers::', existingUsers);

        // If not, add to database
        if (!existingUsers?.length) {
          const newUser = await db
            .insert(USERS_TABLE)
            .values({
              email,
              userName: username ?? firstName ?? 'Anonymous',
            })
            .returning({
              id: USERS_TABLE.id,
              userName: USERS_TABLE.userName,
              email: USERS_TABLE.email,
              isMember: USERS_TABLE.isMember,
            });

          console.log('newUser::', newUser);
        }

        return { message: 'Successfully created user' };
      }
    );

    // Step to send welcome email notification

    // Step to send email notification after 3 days of user creation
  }
);
