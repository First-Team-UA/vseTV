import HttpError from '../../helpers/HttpError';
import pool from './index';
import { RowDataPacket } from 'mysql2';




interface Clients extends RowDataPacket {
  id: number;
  name: string;
  contact_email_tech: string;
  contact_email_fin: string;
  contact_tel_tech: string;
  contact_tel_fin: string;
  token: string;
}


export async function getClients(): Promise<Clients[]> {
  try {
    const [rows] = await pool.query<Clients[]>("SELECT * FROM clients");
    return rows;
  } catch (error) {
    console.error("Database query error:", error);
    const err = new HttpError(404, "Not Found")
    throw err;
  }
}
