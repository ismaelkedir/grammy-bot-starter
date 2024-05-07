import { webhookCallback } from "grammy";
import { bot } from "../src/bot";
import express from 'express';
import { logger } from "../src/utils/logger";

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.post('/api/webhook', async (req, res) => {
    try {
        logger.info('Received webhook request', { body: req.body });
        await webhookCallback(bot, 'express')(req, res);
    } catch (error) {
        logger.error('Error handling webhook request', { error });
        res.sendStatus(500);
    }
});

app.get('/healthz', (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT || 3000, () => {
    logger.info(`Server is running on port ${PORT || 3000}`);
});