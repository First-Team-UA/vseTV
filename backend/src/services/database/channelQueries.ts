import pool from './index';
import { RowDataPacket } from 'mysql2';

interface TableColumn extends RowDataPacket {
  COLUMN_NAME: string;
  DATA_TYPE: string;
  IS_NULLABLE: string;
  COLUMN_DEFAULT: string | null;
  COLUMN_KEY: string;
}

export async function getTableColumns(tableName: string): Promise<TableColumn[]> {
  try {
    const query = `
      SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE, COLUMN_DEFAULT, COLUMN_KEY 
      FROM information_schema.COLUMNS 
      WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?
    `;
    const [rows] = await pool.query<TableColumn[]>(query, [process.env.DB_NAME, tableName]);
    return rows;
  } catch (error) {
    console.error("Error fetching table columns:", error);
    throw error;
  }
}
