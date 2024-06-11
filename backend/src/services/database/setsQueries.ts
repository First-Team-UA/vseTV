import HttpError from '../../helpers/HttpError';
import pool from './index';
import { RowDataPacket } from 'mysql2';


interface SetChannels extends RowDataPacket {
  channel: number;
  export_id: number;
  export_ctag: string;
}

interface ChannelsIds extends RowDataPacket {
  channelsIds: number[];
}

// Взяти всі канали, які є в певному наборі
export async function getSetChannels(id: number): Promise<SetChannels[]> {
  try {
    const [rows] = await pool.query<SetChannels[]>(
      'SELECT * FROM clients_set_channels WHERE set_id = ? AND archived<>1',
      [id],
    );
    return rows;
  } catch (error) {
    console.error('Error executing query', error);
    return [];
  }
}

// Перенести останній набір в архив (додати каналам в наборі поточну дату оновлення)
export async function moveChannelsToArhiv(id: number): Promise<void> {
  const date = new Date(); // Проверить часовую зону(?)
  const lastUpdate = date.toISOString().replace('T', ' ').substring(0, 19);

  try {
    const [result]: any = await pool.query(
      'UPDATE clients_set_channels SET last_edited= ?, archived=1 WHERE set_id = ? AND archived=0',
      [lastUpdate, id],
    );
    console.log('Rows updated:', result.affectedRows);
  } catch (error) {
    console.error('Error executing query', error);
  }
}

// Додати канали в набір
export async function addChannelsToSet(
  channelsData: SetChannels[],
): Promise<void> {
  const connection = await pool.getConnection();

  try {
    // Создание строки запроса с множественными вставками
    const query = `
      INSERT INTO clients_set_channels (set_id, channel, export_id, export_ctag)
      VALUES ${channelsData.map(() => '(?, ?, ?, ?)').join(', ')}
    `;
    console.log(query);
    // Преобразование данных в одномерный массив значений
    const values = channelsData.flatMap(
      ({ set_id, channel, export_id, export_ctag }) => [
        set_id,
        channel,
        export_id,
        export_ctag,
      ],
    );

    // Выполнение запроса
    await connection.query(query, values);

    console.log('Data inserted successfully');
  } catch (error) {
     const err = new HttpError(404, 'Not Found');
     throw err;
  } finally {
    connection.release();
  }
}

// Оновити інформацію про набор
export async function updateSetInfo(
  channelsData: SetChannels[],
  setId: number,
): Promise<void> {

  const date = new Date();
  const updated = date.toISOString().replace('T', ' ').substring(0, 19);

  // Беремо тільки id каналів з масиву об'єктів який прийшов
  const channels: number[] = channelsData.map(
    (item: SetChannels) => item.channel,
  );

  // Перетворення масива channels у строку для запису в базу
  const channelsString: string = channels.join(', ');

  try {
    const [result]: any = await pool.query(
      'UPDATE clients_sets SET chan_numbers= ?, chan_quantity = ?, updated= ? WHERE id = ?',
      [channelsString, channels.length, updated, setId],
    );
    // console.log('SET updated:', result.affectedRows);
  } catch (error) {
     const err = new HttpError(404, 'Not Found');
     throw err;
  }
}