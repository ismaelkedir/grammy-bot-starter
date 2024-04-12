import { Context } from "grammy";

const CHAPA_TOKEN = process.env.CHAPA_TOKEN;

export const payCommand = async (ctx: Context) => {
    const invoiceTitle = "Test Product";
    const invoiceDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const invoicePayload = `${ctx.message?.from.id}-${ctx.me.id}-${ctx.message?.message_id}-${new Date().toISOString()}`;
    const invoiceProviderToken = CHAPA_TOKEN ?? '';
    const invoiceCurrency = "ETB";
    const invoiceItems = [{ label: "Test Product", amount: 100 * 100 }];
    const invoiceOptions = {
        max_tip_amount: 100 * 100,
        suggested_tip_amounts: [5 * 100, 10 * 100, 25 * 100, 50 * 100],
        photo_url: "https://via.placeholder.com/300/09f/fff.png",
    };

    await ctx.replyWithInvoice(
        invoiceTitle,
        invoiceDescription,
        invoicePayload,
        invoiceProviderToken,
        invoiceCurrency,
        invoiceItems,
        invoiceOptions
    )
}
