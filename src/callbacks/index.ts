import { Context } from 'grammy';
import { handleCategorySelection } from './categoryActions';
import { handleProductSelection } from './productActions';
import { handleMainActionSelection } from './mainActions';
import { handleReplyTypesActionSelection } from './replyTypesActions';

export const handleCallbackQuery = async (ctx: Context) => {
    const data = ctx.callbackQuery?.data;

    if (!data) {
        return await ctx.reply("Sorry, I didn't understand that action.");
    }

    switch (true) {
        case data.startsWith('main_'):
            return await handleMainActionSelection(ctx);
        case data.startsWith('reply_'):
            return await handleReplyTypesActionSelection(ctx);
        case data.startsWith('category_'):
            return await handleCategorySelection(ctx);
        case data.startsWith('product_'):
            return await handleProductSelection(ctx);
        default:
            return await ctx.reply("Sorry, I didn't understand that action.");
    }
};
