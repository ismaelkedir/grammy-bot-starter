import { Context } from 'grammy';

// Handler for text messages
export const handleTextMessage = async (ctx: Context) => {
    const text = ctx.message?.text;

    // Logic to process the text message
    await ctx.reply(`You said: ${text}`);
};

// You can add more handlers for different types of messages