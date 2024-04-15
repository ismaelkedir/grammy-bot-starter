import { Context, InlineKeyboard } from "grammy";

export const helpCommand = async (ctx: Context) => {
    await ctx.reply("This is my first attempt to build a bot with grammy (grammy.dev). Will explore the possiblities here 🙂");
    const inlineKeyboard = new InlineKeyboard()
        .text('Start', 'start')

    await ctx.reply('We hope that is clear. If so, get started', {
        reply_markup: inlineKeyboard,
    });
}