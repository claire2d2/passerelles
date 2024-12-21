import { DataSource } from "typeorm";
import dotenv from 'dotenv';
dotenv.config(); // This loads your .env file
import PasserelleEntity from "@/entities/Passerelle.entity";
import ProfileEntity from "@/entities/Profile.entity";

export const datasource = new DataSource({
  type: "postgres", // Use PostgreSQL as the database type
  url: process.env.SUPABASE_POSTGRES_URL,
  // host: process.env.SUPABASE_HOST,
  // port: 5432,
  // username: process.env.SUPABASE_USERNAME,
  // password: process.env.SUPABASE_PASSWORD,
  // database: process.env.SUPABASE_DATABASE,
  entities: [PasserelleEntity, ProfileEntity], // Add your entities here
  synchronize: true, // Automatically synchronize schema (avoid in production; use migrations instead)
  logging: false, // Set to true if you want to see queries in the terminal
  // Optionally, enable detailed logging for errors or queries:
  // logging: ["error", "query"],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
