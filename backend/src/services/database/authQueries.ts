import HttpError from '../../helpers/HttpError';
import pool from './index';
import { RowDataPacket } from 'mysql2';

export interface ClientAuth extends RowDataPacket {
  id: number;
  token: string;
  refreshtoken?: string;
}

interface ClientID extends RowDataPacket {
  id: number;
}

// Прийняти логін і пароль, повернути аутентифікаційні данні

export async function getID(
  login: string,
  password: string,
): Promise<ClientID | null> {
  try {
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT id FROM clients_auth WHERE login = ? AND password = ?',
      [login, password],
    );
    if (rows.length > 0) {
      // Приводим первый элемент к типу ClientID
      const res = rows[0] as ClientID;
      return res;
    }
    return null;
  } catch (error) {
    console.error('Database query failed:', error);
    throw error;
  }
}

export async function getAuth(
  login: string,
  password: string,
): Promise<ClientAuth | null> {
  try {
    const [rows]: [ClientAuth[], any] = await pool.query(
      'SELECT token, refreshtoken FROM clients_auth WHERE login = ? AND password = ?',
      [login, password],
    );

    console.log(Array.isArray(rows));

    console.log(rows.length > 0);
    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0];
    } else {
      console.log(`rows is empty`);
      return null;
    }
  } catch (error) {
    console.error('Error executing query', error);
    return null;
  }
}

export const setToken = async (token: string, id: number): Promise<void> => {
  try {
    await pool.query('UPDATE clients_auth SET token=? WHERE id=?', [token, id]);
  } catch (error) {
    const err = new HttpError(404, 'Not Found');
    throw err;
  }
};

export const logout = async (id: number): Promise<void> => {
  try {
    await pool.query('UPDATE clients_auth SET token=? WHERE id=?', [null, id]);
  } catch (error) {
    const err = new HttpError(404, 'Not Found');
    throw err;
  }
};

// const [rows] = await pool.query<ClientAuth[]>(
//   'SELECT * FROM clients_auth WHERE id = ?',
//   [id],
// );
