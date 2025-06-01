import { serve } from 'inngest/next';
import { inngest } from '@/inngest/client';
import { helloWorld, createNewUser } from '@/inngest/functions';

// Serve the inngest API
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [helloWorld, createNewUser],
});
