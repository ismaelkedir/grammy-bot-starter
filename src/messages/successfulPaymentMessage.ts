import { Context } from "grammy";

export const handleSuccessfulPaymentMessage = async (ctx: Context) => {
    const payment = ctx.message?.successful_payment;
    if (!payment) return await ctx.reply("No successful payment information found.");
    await ctx.reply(`Payment of ${payment.total_amount / 100} ${payment.currency} was successful. Thank you!`);
}