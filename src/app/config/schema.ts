import { boolean, json, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const USERS_TABLE = pgTable('users', {
  id: serial().primaryKey(),
  userName: varchar().notNull(),
  email: varchar().notNull(),
  isMember: boolean().default(false),
});

export const STUDY_MATERIALS_TABLE = pgTable('study_materials', {
  id: serial().primaryKey(),
  courseId: varchar().notNull(),
  courseType: varchar().notNull(),
  topic: varchar().notNull(),
  difficultyLevel: varchar().default('Easy'),
  courseLayout: json().default({}),
  createdBy: varchar().notNull(),
  status: varchar().default('Generating'),
});
