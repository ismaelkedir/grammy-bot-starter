import { Context } from "grammy";
import { initialSessionData } from "./constants";
import { UserSession, } from "./types";

// Stores data per user. Using the ctx.chat?.id won't work for inline queries.
// Since users should be able to use the bot from both inline and in-bot, the
// session key should be the ctx.from?.id in our case.
// See documentation: https://grammy.dev/plugins/session#session-keys
export function customSessionKeyStrategy(ctx: Context): string | undefined {
    // Give every user their personal session storage
    // (will be shared across groups and in their private chat)
    return ctx.from?.id.toString();
}

export function createInitialSessionData(): UserSession {
    return {
        ...initialSessionData
    }
}