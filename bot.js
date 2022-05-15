require("dotenv").config();
const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

const marketplaceAdress = {
  MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8: "Magic Eden",
};

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORDJS_BOT_TOKEN);

const embMsg = new MessageEmbed({
  color: 3447003,
  author: {
    name: "Author Name, it can hold 256 characters",
    icon_url: "https://i.imgur.com/lm8s41J.png",
  },
  thumbnail: {
    url: "http://i.imgur.com/p2qNFag.png",
  },
  image: {
    url: "http://i.imgur.com/yVpymuV.png",
  },
  title: "This is your title, it can hold 256 characters",
  url: "https://discord.js.org/#/docs/main/master/class/MessageEmbed",
  description: "This is the main body of text, it can hold 2048 characters.",
  fields: [
    {
      name: "This is a single field title, it can hold 256 characters",
      value: "This is a field value, it can hold 1024 characters.",
      inline: false,
    },
    {
      name: "Inline fields",
      value:
        "They can have different fields with small headlines, and you can inline them.",
      inline: true,
    },
    {
      name: "Masked links",
      value:
        "You can put [masked links](https://discord.js.org/#/docs/main/master/class/MessageEmbed) inside of rich embeds.",
      inline: true,
    },
    {
      name: "Markdown",
      value: "You can put all the *usual* **__Markdown__** inside of them.",
      inline: true,
    },
    {
      name: "\u200b",
      value: "\u200b",
    },
  ],
  timestamp: new Date(),
  footer: {
    icon_url: "http://i.imgur.com/w1vhFSR.png",
    text: "This is the footer text, it can hold 2048 characters",
  },
});

client.on("messageCreate", (message) => {
  if (message.content === "!test") {
    message.channel.send({
      embeds: [embMsg],
    });
  }
});
