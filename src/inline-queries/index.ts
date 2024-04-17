import { InlineQueryResult, InlineQueryResultArticle, InlineQueryResultPhoto } from "grammy/types";

export async function handleInlineQuery(ctx: any): Promise<InlineQueryResult[]> {
    const photoResults: InlineQueryResultPhoto[] = [
        {
            type: "photo",
            id: "1",
            thumbnail_url: "https://via.placeholder.com/150/09f/fff.png",
            photo_url: "https://via.placeholder.com/300/09f/fff.png",
            caption: "This is the first photo",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "🫶", callback_data: "button1" },
                        { text: "🙅🏽", callback_data: "button2" },
                    ],
                ],
            },
        },
        {
            type: "photo",
            id: "2",
            thumbnail_url: "https://via.placeholder.com/150/09f/fff.png",
            photo_url: "https://via.placeholder.com/300/09f/fff.png",
            caption: "This is the second photo",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "🫶", callback_data: "button1" },
                        { text: "🙅🏽", callback_data: "button2" },
                    ],
                ],
            },
        },
    ];
    const articleResults: InlineQueryResultArticle[] = [
        {
            type: "article",
            id: "1",
            title: "Article 1",
            description: "This is the first article",
            thumbnail_url: "https://via.placeholder.com/150/09f/fff.png",
            input_message_content: {
                message_text: "You've selected the article of id 1",
            },
        },
        {
            type: "article",
            id: "2",
            title: "Article 2 with reply buttons",
            description: "This is the second article",
            thumbnail_url: "https://via.placeholder.com/150/09f/fff.png",
            input_message_content: {
                message_text: "You've selected the article of id 2",
            },
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Button 1", callback_data: "button1" },
                        { text: "Button 2", callback_data: "button2" },
                    ],
                ],
            },
        },
    ];
    switch (ctx.inlineQuery.query) {
        case "photos":
            return photoResults;
        case "articles":
            return articleResults;
        default:
            return [];
    }
}