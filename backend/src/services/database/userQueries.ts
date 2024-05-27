import pool from './index';
import { RowDataPacket } from 'mysql2';

interface User extends RowDataPacket {
  id: number;
  name: string;
  email: string;
}

export async function getUsers(): Promise<User[]> {
  try {
    const [rows] = await pool.query<User[]>("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
}
