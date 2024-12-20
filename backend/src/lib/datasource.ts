import { DataSource } from "typeorm";

export const datasource = new DataSource({
  type: "postgres", // Use PostgreSQL as the database type
  url: process.env.SUPABASE_POSTGRES_URL,
  entities: [], // Add your entities here
  synchronize: true, // Automatically synchronize schema (avoid in production; use migrations instead)
  logging: false, // Set to true if you want to see queries in the terminal
  // Optionally, enable detailed logging for errors or queries:
  // logging: ["error", "query"],
});
