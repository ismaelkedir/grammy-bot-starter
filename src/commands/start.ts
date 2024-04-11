import { Context, InlineKeyboard, Keyboard } from "grammy";

export const startCommand = async (ctx: Context) => {
    await ctx.reply("Welcome to whatever this is!");
    // Create an inline keyboard with buttons
    const inlineKeyboard = new InlineKeyboard()
        .url('Google', 'https://google.com') // Each button has a label and a callback data
        .text('Button 2', 'callback_data_2')
        .row() // Use .row() to move the next button to the next line
        .text('Button 3', 'callback_data_3')
        .text('Button 4', 'callback_data_4')

    // Create a reply keyboard with buttons
    const replyKeyboard = new Keyboard()
        .text('Button 1')
        .text('Button 2')
        .row()
        .text('Button 3')
        .text('Button 4')

    // Send a message with the inline keyboard
    await ctx.reply('Here are some options for you:', {
        reply_markup: inlineKeyboard,
    });

    // Send a message with the reply keyboard (can be one-time or not)
    await ctx.reply('Here are some options for you:', {
        reply_markup: {
            keyboard: replyKeyboard.build(),
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    })
}