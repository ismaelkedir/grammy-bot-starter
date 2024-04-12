import { Context } from 'grammy';
import { replyTypesKeyboard } from '../keyboards/replyTypesKeyboards';
import { mainMenuReplyKeyboard } from '../keyboards/mainScreenKeyboards';
import { shareMyNumberButton } from '../keyboards/sharedKeyboards';

export const handleMainActionSelection = async (ctx: Context) => {
    // Assuming callback data format is "main_<buttonId>". eg: "main_show_products"
    const buttonId = ctx.callbackQuery?.data?.split('_').slice(1).join('_') ?? '';
    const formattedButtonId = buttonId.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    // Respond to the callback query to let Telegram know it was received
    await ctx.answerCallbackQuery(`Selected: ${buttonId}`);

    // Logic to handle the selection
    await ctx.reply(`You've selected ${formattedButtonId}. Here is the what's under it...`);

    switch (buttonId) {
        case 'reply_types':
            await ctx.reply('<b>Reply Types</b>:', {
                reply_markup: replyTypesKeyboard,
                parse_mode: 'HTML',
            });
            break;
        case 'custom_keyboard':
            await ctx.reply('<b>Here is a custom keyboard below your input field</b>', {
                reply_markup: {
                    keyboard: mainMenuReplyKeyboard,
                    resize_keyboard: true,
                    one_time_keyboard: true,
                },
                parse_mode: 'HTML',
            });
            break;
        case 'share_contact':
            await ctx.reply(
                'Please share your phone number to continue.', {
                reply_markup: {
                    keyboard: shareMyNumberButton,
                    one_time_keyboard: true, // Optional: Hide the keyboard after use
                    resize_keyboard: true    // Optional: Resize the keyboard to fit button sizes
                },
            }
            );
            break;
        default:
            await ctx.reply('I do not know how to handle that action.');
    }
}