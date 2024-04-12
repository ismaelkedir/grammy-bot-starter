import { InlineKeyboard, Keyboard } from "grammy";

export const mainMenuKeyboard = new InlineKeyboard()
        .url('Open Link', 'https://google.com')
        .text('Open Custom Keyboard', 'main_custom_keyboard')
        .row()
        .text('Reply Types', 'main_reply_types')
        .text('Share Contact', 'main_share_contact')

export const mainMenuReplyKeyboard = new Keyboard()
        .text('Hi')
        .text('This')
        .row()
        .text('is')
        .text('a')
        .row()
        .text('Custom')
        .text('Keyboard')
        .build()