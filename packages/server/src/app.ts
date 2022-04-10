/* eslint-disable no-var */
import dotenv from 'dotenv';
import express from 'express';
import { Logger } from 'winston';

import { PORT } from './config/config';

import logger from './utils/logger';
import mongoManger from './utils/mongoManager';

declare global {
  var Logger: Logger;
}

const startServer = () => {
  const app = express();
  global.Logger = logger;
  dotenv.config();
  mongoManger.connect();

  app
    .listen(PORT, () => {
      Logger.info(`Server listening on port: ${PORT}`);
    })
    .on('error', (err) => {
      logger.error(err);
      process.exit(1);
    });
};

startServer();
