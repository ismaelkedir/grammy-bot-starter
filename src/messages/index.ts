import { Context } from 'grammy';
import { handleTextMessage } from './textMessages';
import { handleSuccessfulPaymentMessage } from './successfulPaymentMessage';
import { handleContactSharedMessage } from './contactSharedMessage';
import { logger } from '../utils/logger';

export const handleMessage = async (ctx: Context) => {
    logger.debug(`Received a message: ${JSON.stringify(ctx.message)}`);

    if (ctx.message?.text) {
        return await handleTextMessage(ctx);
    } else if (ctx.message?.successful_payment) {
        return await handleSuccessfulPaymentMessage(ctx)
    } else if (ctx.message?.contact) {
        return await handleContactSharedMessage(ctx);
    }
    // Add more conditions based on the message type
    // or content to dispatch to different handlers.

    // Default handler for unknown messages
    await ctx.reply("I'm not sure how to handle that message.");
};
