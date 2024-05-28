import { Router, Request, Response } from 'express';
import { getChannels } from '../services/database/channelQueries';

const router = Router();

interface Channel {
  name: string;
  name_ua: string;
  names_alternative: string;
  schedule_language_id: number;
  schedule_special_type: number;
  region: number;
  tiedtoid: number;
  description: string;
  logo: number;
  active: number;
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
  const regionNumber = parseInt(region);
  if (isNaN(regionNumber)) {
    return res.status(400).json({ error: "Invalid region" });
  }
  const channelsByRegion = cachedChannels.filter(channel => channel.region === regionNumber);
  res.json(channelsByRegion);
});

router.get("/name/:name", (req: Request, res: Response) => {
  const { name } = req.params;
  const channelsByName = cachedChannels.filter(channel => channel.name === name);
  res.json(channelsByName);
});

router.get("/language/:languageId", (req: Request, res: Response) => {
  const { languageId } = req.params;
  const languageIdNumber = parseInt(languageId);
  if (isNaN(languageIdNumber)) {
    return res.status(400).json({ error: "Invalid language ID" });
  }
  const channelsByLanguage = cachedChannels.filter(channel => channel.schedule_language_id === languageIdNumber);
  res.json(channelsByLanguage);
});

router.get("/active/:status", (req: Request, res: Response) => {
  const { status } = req.params;
  const isActive = status === '1';
  const activeChannels = cachedChannels.filter(channel => channel.active === (isActive ? 1 : 0));
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
  const specialTypeNumber = parseInt(type);
  if (isNaN(specialTypeNumber)) {
    return res.status(400).json({ error: "Invalid special type" });
  }
  const channelsBySpecialType = cachedChannels.filter(channel => channel.schedule_special_type === specialTypeNumber);
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
  const { tiedtoid } = req.params;
  const tiedtoedNumber = parseInt(tiedtoid);
  if (isNaN(tiedtoedNumber)) {
    return res.status(400).json({ error: "Invalid tiedtoid value" });
  }
  const channelsByTiedtoed = cachedChannels.filter(channel => channel.tiedtoid === tiedtoedNumber);
  res.json(channelsByTiedtoed);
});
 
// Пошук за лого 

router.get("/logo/:logo", (req: Request, res: Response) => {
  const { logo } = req.params;
  const logoNumber = parseInt(logo);
  if (isNaN(logoNumber)) {
    return res.status(400).json({ error: "Invalid logo value" });
  }
  const channelsByLogo = cachedChannels.filter(channel => channel.logo === logoNumber);
  res.json(channelsByLogo);
});

export default router;
