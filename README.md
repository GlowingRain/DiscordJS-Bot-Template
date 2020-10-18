# Discord.JS Bot Template (OLD)


> _**Use this template if you're up to edit this to make it work with the most recent updates made to the Discord.JS library, currently `v12 (stable)`, all of this code was written in `v11`, and it's not longer supported, whatd'ya expect from a 2 year old project!?**_


An easy to-understand template for making Discord.JS bots. Built by following the **[official guide](https://discordjs.guide/)** of Discord.JS.

**Don't forget to check the wiki for detailed information on how to understand my template, and fully use it at your own potential. (WIP)**

## Requirements

- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/es/)
- A "good" understanding of JavaScript
- And of course, [Discord.JS](https://discord.js.org/)

## Features

* Event Handler
* Command Handler
* Custom logger using [chalk](https://www.npmjs.com/package/chalk) and [moment](https://www.npmjs.com/package/moment) (Originally from [AnIdiotsGuide's guidebot](https://github.com/AnIdiotsGuide/guidebot), which is pretty awesome!)
* Tools & errors modules, such as CMDError, noPerms, etc.
* **Dinamically executed commands**

## How-To

1. Clone the repository by doing in a terminal `git clone https://github.com/GlowingRain/DiscordJS-Bot-Template.git`
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

As you might already noticed by browsing files over the **`storage`** folder, you have a `channels.json` file. It holds every [Channel Id](https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=id) that the bot is going to need to perform and/or complete actions such as **_welcoming new users_** and so on. You can add more channels as you wish.

**That's it! You're good to go now, I'll be adding further code whenever I feel like doing it, stay updated if you want to.**

## Reminder 

If you're going to publish your work on Github or somewhere else, please, **NEVER** but **NEVER** publish the `config.json` file **if you have the bot's token there**. Add a `.gitignore` to your proyect instead.

## To-Do

* [x] Event Handler.
* [x] Command Handler.
* [x] Basic permission level.
* [x] Help command with categories.

## License

MIT
