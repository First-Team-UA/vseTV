import HttpError from '../../helpers/HttpError';
import ctrlWrapper from '../../helpers/ctrlWrapper';
import { getSetChannels, moveChannelsToArhiv, addChannelsToSet, updateSetInfo } from '../../services/database/setsQueries';
import { NextFunction, Request, Response } from 'express';


const setChannels = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const setId: number = parseInt(req.params.setId, 10);
  console.log(setId);
  try {
    const result = await getSetChannels(setId);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const updateSet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  //  1. Оновлюється таблиця client_set_channels, де для кожного каналу попередньої виборки каналів записується єдина дата оновлення
  // (таким чином ця вибірка каналів та їх налаштувань стає архівною)

  // 2. Оновлюється таблиця client_set_channels, а яку записується нова вибірка каналів і їх налаштувань (тобто ті канали, які клієнт відмітив собі)
  // Треба перебрати масив каналів що додаються, які були обрані (чекбоксами), так для кожного елементу виповнити запити на вставку в таблицю

  // 3. Оновлюється таблиця clients_sets, поле  chan_numbers, куди записується новий масив з переліком id обраних телеканалів

  const setId: number = parseInt(req.params.setId, 10);
  const newChannels = req.body.newChannels;
  console.log('newchannels:', newChannels);
  console.log(typeof newChannels);

  try {
   
    // Переносимо канали поточного набору в архів в client_set_channels
    await moveChannelsToArhiv(setId);

    // Додаємо нові канали в набір в client_set_channels
    await addChannelsToSet(newChannels);

    // Оновлюємо дані набору в clients_sets
    await updateSetInfo(newChannels, setId);

    res.json('Updated');
  } catch (error) {
    next(error);
  }
};


export const setControllers = {
  setChannels: ctrlWrapper(setChannels),
  updateSet: ctrlWrapper(updateSet),
};