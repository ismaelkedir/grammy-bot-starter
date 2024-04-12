import { Context } from "grammy";

export const handleContactSharedMessage = async (ctx: Context) => {
    const contact = ctx.message?.contact;
    if (!contact) return await ctx.reply("No successful contact information found.");
    await ctx.reply('Thanks for sharing your contact! <b>(Not really, I cannot store it)</b>',
        { parse_mode: 'HTML' }
    );
}