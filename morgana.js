const discord = require("discord.js");
const dotenv = require("dotenv")
const myIntents = new discord.Intents();
myIntents.add(discord.Intents.FLAGS.GUILDS);
const client = new discord.Client({
    intents: myIntents
});

client.login(process.env.DISCORDTOKEN)