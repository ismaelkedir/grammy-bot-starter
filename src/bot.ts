import { config } from "dotenv";
import { Bot, GrammyError, HttpError } from "grammy";
import { startCommand } from "./commands/start";
import { helpCommand } from "./commands/help";
import { payCommand } from "./commands/pay";
import { handleCallbackQuery } from "./callbacks";
import { handleMessage } from "./messages";

// Load the environment variables from the .env file
config();

const CHAPA_TOKEN = process.env.CHAPA_TOKEN;
const BOT_TOKEN = process.env.TOKEN;

// Ensure the environment variables are set correctly
if (!BOT_TOKEN) {
    console.error('Missing bot token in environment variables');
    process.exit(1);
}

if (!CHAPA_TOKEN) {
    console.error('Missing chapa token in environment variables');
    process.exit(1);
}

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(`${BOT_TOKEN}`);

// Handle the /start command.
bot.command("start", startCommand);

// Handle the /help command.
bot.command("help", helpCommand);

// Handle the /pay command.
bot.command("pay", (ctx) => payCommand(ctx, CHAPA_TOKEN));



// =====================================================================
/**
 * Register some middlewares for callback queries, 
 * i.e. the updates that Telegram delivers to your bot when a user clicks an inline button 
 * (that is a button under a message).
 */
// =====================================================================

// Register middleware to handle users pressing any button your bot ever sent
bot.on('callback_query:data', handleCallbackQuery)

// Register middleware to handle users pressing buttons with that specific payload
bot.callbackQuery('specific-button-payload', async (ctx) => {
    await ctx.answerCallbackQuery('specific-button-payload triggered');
    await ctx.reply('You\'ve triggered `specific-button-payload` callback query');
})



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
    await ctx.reply(`You sent a text message: ${ctx.message?.text}`);
});

// Text messages and text channel posts
bot.on(':text', async (ctx) => {
    await ctx.reply(`You sent a text message: ${ctx.message?.text}`);
});



// =====================================================================
/**
 * Register some middlewares that will only be executed for some specific updates,
 * namely those matching the provided filter query. Filter queries are a concise way
 * to specify which updates you are interested in.
 */
// =====================================================================

// Handle pre-checkout query
bot.on("pre_checkout_query", async (ctx) => {
    await ctx.answerPreCheckoutQuery(true, ctx.preCheckoutQuery.id);
});



/**
 * Now that you specified how to handle messages, you can start your bot.
 * This will connect to the Telegram servers and wait for messages.
 */
bot.start();



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