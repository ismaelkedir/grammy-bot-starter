import winston from "winston";

export const logger = winston.createLogger({
    // Do not log if in production
    silent: process.env.NODE_ENV === 'production',
    level: 'debug', // Log everything in debug level or above (verbose, info, warn, error)
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new winston.transports.Console(),
        // Add more transports here for production use, e.g., file transport
    ],
});