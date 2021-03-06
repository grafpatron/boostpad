const Discord   = require("discord.js");
const fs        = require("fs");
const path      = require("path");
const client    = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION", "USER"]});
// partials -> things that will load even after starting the bot
const { registerCommands, registerEvents } = require('./utils/registry');

(async () => {
    client.login(process.env.token);
    client.commands = new Map();
    client.config   = JSON.parse(fs.readFileSync(path.resolve(__dirname, "config.json"), "utf-8"));
    client.letterEmojis   = require("./regionalIndicators").emojis;

    await registerEvents(client, '../events');
    await registerCommands(client, '../commands');
})();