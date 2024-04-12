import { Context } from "grammy";
import { mainMenuKeyboard } from "../keyboards/mainScreenKeyboards";

export const startCommand = async (ctx: Context) => {
    await ctx.reply("Welcome to whatever this is!");

    // Send a message with the inline keyboard
    await ctx.reply('Here is an inline keyboard with some options:', {
        reply_markup: mainMenuKeyboard,
    });
}