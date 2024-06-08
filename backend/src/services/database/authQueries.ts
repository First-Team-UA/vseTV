import pool from './index';
import fs from 'fs';
import { RowDataPacket } from 'mysql2';
import mysql from 'mysql2/promise';

interface ClientAuth extends RowDataPacket {
  id: number;
  login: string;
  password: string;
  token: string;
}

// Прийняти логін і пароль, повернути об'єкт даних
export async function getAuth(
  login: string,
  password: string,
): Promise<ClientAuth | null> {
  try {
    const [rows]: [ClientAuth[], any] = await pool.query(
      'SELECT * FROM clients_auth WHERE login = ? AND password = ?',
      [login, password],
    );

    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error executing query', error);
    return null;
  }
}

export async function sendToken(
  id: string,
  token: string,
): Promise<any | null> {
  try {
    const [result]: [any, any] = await pool.query(
      'UPDATE clients_auth SET token = ? WHERE id = ?',
      [token, id],
    );
    return result;
  } catch (error) {
    console.error('Error executing query', error);
    return null;
  }
}
// const [rows] = await pool.query<ClientAuth[]>(
//   'SELECT * FROM clients_auth WHERE id = ?',
//   [id],
// );
