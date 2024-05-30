import pool from './index';
import { RowDataPacket } from 'mysql2';

interface SetChannels extends RowDataPacket {
  channel: number;
  export_id: number;
  export_ctag: string;
}

// Взяти всі канали, які є в наборі № ...
export async function getSetChannels(id:number): Promise<SetChannels[]> {
  try {
    const [rows] = await pool.query<SetChannels[]>(
      'SELECT * FROM clients_set_channels WHERE set_id = ?',
      [id],
    );
    return rows;
  } catch (error) {
    console.error('Error executing query', error);
    return [];
  }
}

// Оновити канали в наборі

// export async function updateSetChannels(): Promise<SetChannels[]> {
//   try {
//     const [rows] = await pool.query<SetChannels[]>(
//       'SELECT * FROM clients_set_channels',
//     );
//     return rows;
//   } catch (error) {
//     console.error('Error executing query', error);
//     return [];
//   }
// }
