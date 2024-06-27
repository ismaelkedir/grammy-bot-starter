import { type UserSession } from "./types"

export const initialSessionData: UserSession = {
    chatId: 0,
    userId: 0,
    username: ""
}

export const cmd = {
    start: "start",
    help: "help",
}

export const commandStrings = Object.values(cmd).map(value => `/${value}`);

export const btnCallbacks = {
    start: "start",
}

export const btnCallbackPrefixes = {
    main: "main_",
    reply: "reply_"
}
