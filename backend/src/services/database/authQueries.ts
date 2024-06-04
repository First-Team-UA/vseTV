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

// Прийняти логін і пароль, повернути аутентифікаційні данні
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

// const [rows] = await pool.query<ClientAuth[]>(
//   'SELECT * FROM clients_auth WHERE id = ?',
//   [id],
// );
