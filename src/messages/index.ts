import { Context } from 'grammy';
import { handleTextMessage } from './textMessages';
// Import other message handlers as needed

export const handleMessage = (ctx: Context) => {
    if (ctx.message?.text) {
        return handleTextMessage(ctx);
    }
    // Add more conditions based on the message type
    // or content to dispatch to different handlers.

    // Default handler for unknown messages
    ctx.reply("I'm not sure how to handle that message.");
};
