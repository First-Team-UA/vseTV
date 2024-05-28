import { Router, Request, Response } from 'express';
import { getChannels } from '../services/database/channelQueries';

const router = Router();

interface Channel {
  name: string;
  name_ua: string;
  names_alternative: string;
  schedule_language_id: number;
  schedule_special_type: string;
  region: string;
  tiedtoid: string;
  description: string;
  logo: string;
  active: boolean;
}

let cachedChannels: Channel[] = [];

async function loadChannels() {
  try {
    cachedChannels = await getChannels();
  } catch (error) {
    console.error("Error loading channels:", error);
  }
}

loadChannels();

router.get("/", (req: Request, res: Response) => {
  res.json(cachedChannels);
});

router.get("/region/:region", (req: Request, res: Response) => {
  const { region } = req.params;
  const channelsByRegion = cachedChannels.filter(channel => channel.region === region);
  res.json(channelsByRegion);
});

router.get("/name/:name", (req: Request, res: Response) => {
  const { name } = req.params;
  const channelsByName = cachedChannels.filter(channel => channel.name === name);
  res.json(channelsByName);
});

router.get("/language/:languageId", (req: Request, res: Response) => {
  const { languageId } = req.params;
  const channelsByLanguage = cachedChannels.filter(channel => channel.schedule_language_id === parseInt(languageId));
  res.json(channelsByLanguage);
});

router.get("/active/:status", (req: Request, res: Response) => {
  const { status } = req.params;
  const isActive = status.toLowerCase() === 'true';
  const activeChannels = cachedChannels.filter(channel => channel.active === isActive);
  res.json(activeChannels);
});

// Пошук по альтернативним назвам
router.get("/alternative-name/:name", (req: Request, res: Response) => {
  const { name } = req.params;
  const channelsByAlternativeName = cachedChannels.filter(channel => channel.names_alternative.includes(name));
  res.json(channelsByAlternativeName);
});

// Пошук по спеціальному типу 

router.get("/special-type/:type", (req: Request, res: Response) => {
  const { type } = req.params;
  const channelsBySpecialType = cachedChannels.filter(channel => channel.schedule_special_type === type);
  res.json(channelsBySpecialType);
});

// Пошук за описом 
router.get("/description/:desc", (req: Request, res: Response) => {
  const { desc } = req.params;
  const channelsByDescription = cachedChannels.filter(channel => channel.description.includes(desc));
  res.json(channelsByDescription);
});

// Пошук за прив'язкою 

router.get("/tiedtoid/:tiedtoid", (req: Request, res: Response) => {
  const { tiedtoed } = req.params;
  const channelsByTiedtoed = cachedChannels.filter(channel => channel.tiedtoid === tiedtoed);
  res.json(channelsByTiedtoed);
});

export default router;
