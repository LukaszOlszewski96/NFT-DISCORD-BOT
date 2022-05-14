require("dotenv").config();
const Discord = require("discord.js");
const { Client, Intents } = require("discord.js");

// Clined discord
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
