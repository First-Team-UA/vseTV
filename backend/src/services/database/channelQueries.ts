import pool from './index';
import { RowDataPacket } from 'mysql2';

interface Channel extends RowDataPacket {
  name: string;
}

export async function getChannels(): Promise<Channel[]> {
  try {
    const query = 'SELECT name FROM CHANNELS';
    const [rows] = await pool.query<Channel[]>(query);
    return rows;
  } catch (error) {
    console.error("Error fetching channels:", error);
    throw error;
  }
}

