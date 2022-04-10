import winston from 'winston';

const { createLogger, format, transports } = winston;

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}][${level}]: ${message}`;
    }),
  ),
  transports: [new transports.Console()],
  defaultMeta: { service: 'chatbot-server' },
});

export default logger;
