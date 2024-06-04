"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const channelQueries_1 = require("../services/database/channelQueries");
const router = (0, express_1.Router)();
let cachedChannels = [];
function loadChannels() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            cachedChannels = yield (0, channelQueries_1.getChannels)();
        }
        catch (error) {
            console.error("Error loading channels:", error);
        }
    });
}
loadChannels();
router.get("/", (req, res) => {
    res.json(cachedChannels);
});
router.get("/region/:region", (req, res) => {
    const { region } = req.params;
    const regionNumber = parseInt(region);
    if (isNaN(regionNumber)) {
        return res.status(400).json({ error: "Invalid region" });
    }
    const channelsByRegion = cachedChannels.filter(channel => channel.region === regionNumber);
    res.json(channelsByRegion);
});
router.get("/name/:name", (req, res) => {
    const { name } = req.params;
    const channelsByName = cachedChannels.filter(channel => channel.name === name);
    res.json(channelsByName);
});
router.get("/language/:languageId", (req, res) => {
    const { languageId } = req.params;
    const languageIdNumber = parseInt(languageId);
    if (isNaN(languageIdNumber)) {
        return res.status(400).json({ error: "Invalid language ID" });
    }
    const channelsByLanguage = cachedChannels.filter(channel => channel.schedule_language_id === languageIdNumber);
    res.json(channelsByLanguage);
});
router.get("/active/:status", (req, res) => {
    const { status } = req.params;
    const isActive = status === '1';
    const activeChannels = cachedChannels.filter(channel => channel.active === (isActive ? 1 : 0));
    res.json(activeChannels);
});
// Пошук по альтернативним назвам
router.get("/alternative-name/:name", (req, res) => {
    const { name } = req.params;
    const channelsByAlternativeName = cachedChannels.filter(channel => channel.names_alternative.includes(name));
    res.json(channelsByAlternativeName);
});
// Пошук по спеціальному типу 
router.get("/special-type/:type", (req, res) => {
    const { type } = req.params;
    const specialTypeNumber = parseInt(type);
    if (isNaN(specialTypeNumber)) {
        return res.status(400).json({ error: "Invalid special type" });
    }
    const channelsBySpecialType = cachedChannels.filter(channel => channel.schedule_special_type === specialTypeNumber);
    res.json(channelsBySpecialType);
});
// Пошук за описом 
router.get("/description/:desc", (req, res) => {
    const { desc } = req.params;
    const channelsByDescription = cachedChannels.filter(channel => channel.description.includes(desc));
    res.json(channelsByDescription);
});
// Пошук за прив'язкою 
router.get("/tiedtoid/:tiedtoid", (req, res) => {
    const { tiedtoid } = req.params;
    const tiedtoedNumber = parseInt(tiedtoid);
    if (isNaN(tiedtoedNumber)) {
        return res.status(400).json({ error: "Invalid tiedtoid value" });
    }
    const channelsByTiedtoed = cachedChannels.filter(channel => channel.tiedtoid === tiedtoedNumber);
    res.json(channelsByTiedtoed);
});
// Пошук за лого 
router.get("/logo/:logo", (req, res) => {
    const { logo } = req.params;
    const logoNumber = parseInt(logo);
    if (isNaN(logoNumber)) {
        return res.status(400).json({ error: "Invalid logo value" });
    }
    const channelsByLogo = cachedChannels.filter(channel => channel.logo === logoNumber);
    res.json(channelsByLogo);
});
exports.default = router;
