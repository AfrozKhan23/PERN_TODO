import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

console.log("Database User:", process.env.PG_USER);
console.log("Database Password:", process.env.PG_PASSWORD);
console.log("Database Password:", process.env.PG_HOST);
console.log("Database Password:", process.env.PG_DATABASE);
console.log("Database Password:", process.env.PG_PORT);

export default pool;
