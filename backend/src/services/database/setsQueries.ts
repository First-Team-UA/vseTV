import pool from './index';
import { RowDataPacket } from 'mysql2';


interface SetChannels extends RowDataPacket {
  channel: number;
  export_id: number;
  export_ctag: string;
}

export async function getSetChannels(): Promise<SetChannels[]> {
  try {
    const [rows] = await pool.query<SetChannels[]>(
      'SELECT * FROM clients_set_channels',
    );
    return rows;
  } catch (error) {
    console.error('Error executing query', error);
    return [];
  }
}