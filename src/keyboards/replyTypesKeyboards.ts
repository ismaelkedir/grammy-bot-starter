import { InlineKeyboard } from "grammy";

export const replyTypesKeyboard = new InlineKeyboard()
    .text('Text Message', 'reply_text')
    .text('Photo Message', 'reply_photo')
    .row()
    .text('Audio Message', 'reply_audio')
    .text('Video Message', 'reply_video')
    .row()
    .text('Edit the Last Message', 'reply_edit_last')