import pool from './index';
import { RowDataPacket } from 'mysql2';

interface Channel extends RowDataPacket {
  name: string;
  name_ua: string;
  names_alternative: string;
  schedule_language_id: number;
  schedule_special_type: string;
  region: string;
  tiedtoid: string;
  description: string;
  logo: string;
  active: boolean;
}

export async function getChannels(): Promise<Channel[]> {
  try {
    const query = `
      SELECT 
        name, 
        name_ua, 
        names_alternative, 
        schedule_language_id, 
        schedule_special_type, 
        region, 
        tiedtoid, 
        description, 
        logo, 
        active 
      FROM channels
    `;
    const [rows] = await pool.query<Channel[]>(query);
    return rows;
  } catch (error) {
    console.error("Error fetching channels:", error);
    throw error;
  }
}
