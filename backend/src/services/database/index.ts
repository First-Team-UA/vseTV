import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import fs from 'fs';

dotenv.config({ path: "../.env" });

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  ssl: {
    ca: fs.readFileSync("../ca-certificate.crt"),
    rejectUnauthorized: true,
  },
});

export default pool;

export async function testConnection(): Promise<void> {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to the database!");
    connection.release();
  } catch (error) {
    console.error("Connection error:", error);
  }
}
