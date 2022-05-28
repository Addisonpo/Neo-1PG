import { Client, Intents } from 'discord.js'; 
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
bot.on('ready', () => console.log('ready'));
bot.login('OTM0MzM2MTQyMDUwOTkyMjE4.YeumVw.t9hkIEgfFl5FLu0KUs4_S895gZ0');
