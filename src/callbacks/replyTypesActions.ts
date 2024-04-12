import { Context } from 'grammy';

// Handler for the first level of main actions
export const handleReplyTypesActionSelection = async (ctx: Context) => {
    // Assuming callback data format is "main_<buttonId>". eg: "main_show_products"
    const buttonId = ctx.callbackQuery?.data?.split('_').slice(1).join('_') ?? '';
    const formattedButtonId = buttonId.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    // Respond to the callback query to let Telegram know it was received
    await ctx.answerCallbackQuery(`Selected: ${buttonId}`);

    // Logic to handle the selection
    await ctx.reply(`You've selected ${formattedButtonId}. Here is the what's under it...`);

    switch (buttonId) {
        case 'text':
            await ctx.reply('<b>Text Message</b>: This is a text reply', {
                parse_mode: 'HTML',
            });
            break;
        case 'photo':
            await ctx.replyWithPhoto('https://via.placeholder.com/300/09f/fff.png', {
                caption: 'This is a photo reply with a caption',
            });
            break;
        case 'audio':
            await ctx.replyWithAudio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
            break;
        case 'video':
            await ctx.replyWithVideo('https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4');
            break;
        case 'edit_last':
            await ctx.editMessageText('This message was edited by the bot');
            break;
        default:
            await ctx.reply('I do not know how to handle that action.');
    }
};

// You can add more handlers for different actions related to product