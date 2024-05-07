import { bot } from "./bot";

/**
 * Now that you specified how to handle messages, you can start your bot.
 * This will connect to the Telegram servers and wait for messages. (Long polling)
 */
bot.start(); // This is not needed when using the webhook method