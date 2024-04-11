import { Context } from 'grammy';

// Handler for category selection callbacks
export const handleCategorySelection = async (ctx: Context) => {
    // Assuming callback data format is "category_<categoryID>"
    const categoryId = ctx.callbackQuery?.data?.split('_')[1];

    // Respond to the callback query to let Telegram know it was received
    await ctx.answerCallbackQuery(`Selected: ${categoryId}`);

    // Logic to handle the category selection, e.g., displaying products in this category
    await ctx.reply(`You selected category ${categoryId}. Here are the products...`);
    // await ctx.editMessageText(`You selected category ${categoryId}. Here are the products...`);
};

// Add more handlers for different actions related to categories