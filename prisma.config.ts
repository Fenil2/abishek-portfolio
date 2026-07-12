import 'dotenv/config';
import { defineConfig } from 'prisma/config';

// Prisma 7 configuration. The datasource URL lives here (used by the Prisma
// CLI for `db push` / `migrate` / `studio`) rather than in schema.prisma.
// At application runtime the connection is supplied by the driver adapter in
// `lib/prisma.ts`.
//
// Prefer the DIRECT (unpooled) Neon endpoint for CLI/DDL operations — Neon's
// pgbouncer pooler can reject some migration statements. Fall back to the
// pooled URL if the unpooled one isn't set.
const migrationUrl = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: migrationUrl as string,
  },
});
