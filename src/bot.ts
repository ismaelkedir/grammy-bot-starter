import { config } from "dotenv";
import { Bot, GrammyError, HttpError, session } from "grammy";
import { startCommand } from "./commands/start";
import { helpCommand } from "./commands/help";
import { handleCallbackQuery } from "./callbacks";
import { handleMessage } from "./messages";
import { handleInlineQuery } from "./inline-queries";
import MongoDBClient from "./utils/db";
import { cmd } from "./utils/constants";
import BotDb from "./database/botDb";

// Load the environment variables from the .env file
config();

const {
    CHAPA_TOKEN: chapaToken,
    BOT_TOKEN: botToken,
    DATABASE_URI: dbUri,
    DATABASE_NAME: dbName = 'bot_db'
} = process.env;

// Setup database connection
const dbClient = MongoDBClient.getInstance();
dbClient.connect(dbUri ?? 'mongodb://localhost:27017', dbName);

// Populate the database with some initial data
const botDb = new BotDb();
botDb.populateDbIfEmpty();

// Ensure the environment variables are set correctly
if (!botToken) {
    console.error('Missing bot token in environment variables');
    process.exit(1);
}

if (!chapaToken) {
    console.error('Missing chapa token in environment variables');
    process.exit(1);
}

// Create an instance of the `Bot` class and pass your bot token to it.
export const bot = new Bot(`${botToken}`);

// Handle the /start command.
bot.command(cmd.start, startCommand);

// Handle the /help command.
bot.command(cmd.help, helpCommand);


// =====================================================================
/**
 * Register some middlewares for callback queries, 
 * i.e. the updates that Telegram delivers to your bot when a user clicks an inline button 
 * (that is a button under a message).
 */
// =====================================================================

// Register middleware to handle users pressing any button your bot ever sent
bot.on('callback_query:data', handleCallbackQuery)


// =====================================================================
/**
 * Register some middlewares that will only be executed for some specific updates, 
 * namely those matching the provided filter query. Filter queries are a concise way 
 * to specify which updates you are interested in.
 * GrammY will call the listeners when users send messages to your bot.
 */
// =====================================================================

// Handle messages (All kinds: text from keyboard, media, url...)
bot.on("message", handleMessage);

// Handle specific kinds of messages (text messages)
bot.on("message:text", async (ctx) => {
    // await ctx.reply(`You sent a text message: ${ctx.message?.text}`);
});

// Text messages and text channel posts
bot.on(':text', async (ctx) => {
    // await ctx.reply(`You sent a text message: ${ctx.message?.text}`);
});



// =====================================================================
/**
 * Register a middleware to handle inline queries, these are triggered when a user types
 * the bot's username in the chat and then starts typing a query in a chat outside of the bot.
 * 
 * To get you started. The bot will respond to queries for "photos" and "articles".
 * e.g. @botname photos - Will display a list of image results
 * e.g. @botname articles - Will display a list of article results 
 */
bot.on("inline_query", async (ctx) => {
    const results = await handleInlineQuery(ctx);
    await ctx.answerInlineQuery(results);
});



// =====================================================================
/**
 * Register a global error handler that will be called whenever an error occurs
 */
// =====================================================================
bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof GrammyError) {
        console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
        console.error("Could not contact Telegram:", e);
    } else {
        console.error("Unknown error:", e);
    }
});