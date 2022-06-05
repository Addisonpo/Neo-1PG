import { config } from 'dotenv';
config({ path: '.env' })

import { Client, Intents } from 'discord.js'; 
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
bot.on('ready', () => console.log('ready'));
bot.on('message', async (whatever_the_user_type_will_be_stored_here) => {
    //if(whatever_the_user_type_will_be_stored_here.author.bot) return;

    //await whatever_the_user_type_will_be_stored_here.reply('blub blub');

    //this is so that my bot will reply specifically
    if(whatever_the_user_type_will_be_stored_here.content.startsWith("add")) {
        whatever_the_user_type_will_be_stored_here.reply('blub blub');
    }
    //this is so that my bot will reply me in DM
    if (whatever_the_user_type_will_be_stored_here.content.startsWith("adm")){
        whatever_the_user_type_will_be_stored_here.member.send('blub blub! blub blub blub.');
    }
});     

bot.login(process.env.BOT_TOKEN);

