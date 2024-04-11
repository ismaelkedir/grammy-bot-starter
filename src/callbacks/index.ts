import { Context } from 'grammy';
import { handleCategorySelection } from './categoryActions';
import { handleProductSelection } from './productActions';
// Import other handlers as necessary

export const handleCallbackQuery = (ctx: Context) => {
    // ctx.callbackQuery.data contains the callback data
    const data = ctx.callbackQuery?.data;

    if (!data) {
        return ctx.reply("Sorry, I didn't understand that action.");
    }

    if (data.startsWith('category_')) {
        return handleCategorySelection(ctx);
    } else if (data.startsWith('product_')) {
        return handleProductSelection(ctx);
    }
    // Add more conditions as necessary

    // Default handler for unknown callback data
    return ctx.reply("Sorry, I didn't understand that action.");
};
