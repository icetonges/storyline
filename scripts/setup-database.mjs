import { getConnectionString } from "@netlify/database";
import postgres from "postgres";

if (!process.env.NETLIFY_DB_URL) {
  throw new Error("NETLIFY_DB_URL is required");
}

const sql = postgres(getConnectionString());
await sql`CREATE TABLE IF NOT EXISTS reading_progress (
  visitor_id text PRIMARY KEY,
  story text NOT NULL,
  section integer NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
)`;

await sql`CREATE TABLE IF NOT EXISTS audio_rate_limits (
  client_key text NOT NULL,
  window_started_at timestamptz NOT NULL,
  request_count integer NOT NULL,
  PRIMARY KEY (client_key, window_started_at)
)`;

console.log("reading_progress is ready");
await sql.end();
