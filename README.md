# DiscordJS Bot Boilerplate

An easy to write-on boilerplate for making Discord.JS bots. Following the **[official guide](https://discordjs.guide/)** of Discord.JS.

## Requirements

- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/es/)
- A "good" understanding of JavaScript
- And of course, [Discord.JS](https://discord.js.org/)

## Features

* Event Handler.
* Command Handler.
* Custom logger using chalk and moment.
* Tools & errors modules, such as CMDError, noPerms, etc.

## How-To

1. Clone the repository by doing in a terminal `git clone https://github.com/GlowingRain/TPPB.git`
2. After cloning, do `npm install`
3. Create a file named `config.json` and copy-paste this inside it:

```json
{
    "owner_ID": "",
    "prefix": "",
    "token": "",
    "version": ""
}
```

You can locate your bot's token going to the [Discord Developer Portal](https://discordapp.com/developers/applications/me). Most like everything you will need for now.

As you might already noticed by browsing files over the **`storage`** folder, you have a `channels.json` file. It holds every [channel.id](https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=id) that the bot is going to need to perform actions such as **_welcoming new users_** and so on. You can add more channels as you wish.

## Reminder 

If you're going to publish your work on Github or somewhere else, please, **NEVER** but **NEVER** publish the `config.json` file **if you have the bot's token there**. Add a `.gitignore` to your proyect instead.

## To-Do

* [x] Event Handler.
* [x] Command Handler.
* [ ] Basic permission level.
* [ ] Help command with categories.

## License

MIT
