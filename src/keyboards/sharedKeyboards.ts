import { Keyboard } from "grammy";

export const shareMyNumberButton = new Keyboard()
    .requestContact('Share my phone number')
    .build()