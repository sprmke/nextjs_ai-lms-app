import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/app/config/schema.ts',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_XQErTz1Uc0pF@ep-super-grass-a7o08831-pooler.ap-southeast-2.aws.neon.tech/ai-lms-app?sslmode=require',
  },
});
