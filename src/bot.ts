import { config } from "dotenv";
import { Bot } from "grammy";
import { startCommand } from "./commands/start";
import { helpCommand } from "./commands/help";
import { handleCallbackQuery } from "./callbacks";
import { handleMessage } from "./messages";

config(); // Load the environment variables from the .env file

// Ensure the bot token is correctly set in the environment variables
if (!process.env.TOKEN) {
    console.error('Missing bot token in environment variables');
    process.exit(1);
}

console.log(`${process.env.TOKEN}`); // <-- this will log your bot token to the console
// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(`${process.env.TOKEN}`); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", startCommand);
bot.command("help", helpCommand);

// Register callback query handler
bot.on('callback_query:data', handleCallbackQuery);

// Handle other messages (typed-in text, media, etc.)
bot.on("message", handleMessage);



// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();