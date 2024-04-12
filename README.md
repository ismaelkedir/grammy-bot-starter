<h1 align="center">Welcome to grammy-bot-starter 👋</h1>
<p>
  <a href="./LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A starter project for building a telegram bot with grammyjs, with simple project structure, and basic features included to show the possible usecases

# Install

```sh
npm install
```

# Usage

```sh
npm run dev
```

# Environment Variables
The `.env` file should include the following environment variables. Running the bot will throw an error and terminate otherwise.
```
TOKEN=""
CHAPA_TOKEN=""
```
You can create a copy of the `.env.example` file and rename it to `.env` to get started
and then add the appropriate values to the variables.

### The `TOKEN` Environment Variable
This is the token of your telegram bot that is provided by bot father.
- Head to [Telegram BotFather](https://t.me/botfather) to create a new bot with a title and valid bot name. (use the `/newbot` command)
- Then copy the token it will provide you with and that's your `TOKEN` for your bot

### The `CHAPA_TOKEN` Environment Variable
Even though you can use any payment provider supported by telegram, this starter project comes with pre-configured integration with chapa as payment option (Currently supported merchant countries: 🇪🇹 Ethiopia). In order to acquire this token, you'll need to follow these steps.
- Head over to bot father and run the `/mybots` command
- Select the bot you're building and select `Payments` from the list of options
- Pick `Chapa` from the list of payment providers
- Then connect your test / live chapa account to your bot depending on your needs
- Follow the instructions displayed by chapa's bot, and you'll get access to your payment token which you should use as the value of `CHAPA_TOKEN`


# Author

👤 **Ismael Kedir**

* Website: https://ismaelkedir.com
* Github: [@ismaelkedir](https://github.com/ismaelkedir)
* LinkedIn: [@ismael-kedir](https://linkedin.com/in/ismael-kedir)

# Show your support

Give a ⭐️ if this project helped you!

# 📝 License

Copyright © 2024 [Ismael Kedir](https://github.com/ismaelkedir).<br />
This project is [MIT](./LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_