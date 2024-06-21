import HttpError from '../../helpers/HttpError';
import pool from './index';
import { RowDataPacket } from 'mysql2';




export interface Clients extends RowDataPacket {
  id: number;
  name: string;
  contact_email_tech: string;
  contact_email_fin: string;
  contact_tel_tech: string;
  contact_tel_fin: string;
  token: string;
  active:number
}

export interface Client extends RowDataPacket {
  id: number;
  name: string;
  contact_email_tech: string;
  contact_email_fin: string;
  contact_tel_tech: string;
  contact_tel_fin: string;
  token: string;
  active: number;
  password?:string
}
export interface Update{
  contact_email_tech?: string;
  contact_email_fin?: string;
  contact_tel_tech?: string;
  contact_tel_fin?: string;
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

export const getClientById = async (id: number): Promise<Client | null> => {
  try {
    const [rows] = await pool.query<Client[]>(`SELECT clients.id, name, token, contact_email_tech, contact_email_fin, contact_tel_tech, contact_tel_fin, active, password FROM clients, clients_auth WHERE clients.id=clients_auth.id AND clients.id=?`,[id]);
    if (rows.length > 0) {
      return rows[0] as Client
    } else {
      return null
    }
   
  } catch (error) {
    const err = new HttpError(404, "Not Found")
    throw err;
  }
}

export const updateClientInfo = async (id: number, update: Update): Promise<void> => {
  try {
   await pool.execute(`UPDATE clients SET contact_email_tech=?, contact_email_fin=?, contact_tel_tech=?, contact_tel_fin=?  WHERE id=?`, [ update.contact_email_tech, update.contact_email_fin, update.contact_tel_tech, update.contact_tel_fin, id]);
  } catch (error) {
    const err = new HttpError(404, "Not Found")
    throw err
  }
}

export const updatePassword = async (id:number, password: string): Promise<void> => {
  try {
    await pool.execute(`UPDATE clients_auth SET password=? WHERE id=?`,[password, id])
  } catch (error) {
    const err = new HttpError(404, "Not Found")
    throw err
  }
}
