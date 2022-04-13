/* eslint-disable no-var */
import { Logger } from 'winston';
import { Driver } from 'neo4j-driver';

import loggerLoader from './logger';
import neo4jLoader from './neo4j';

import 'reflect-metadata';

declare global {
  var Logger: Logger;
  var Driver: Driver;
}

export default () => {
  global.Logger = loggerLoader;
  Logger.info('🚀  Logger loaded!');

  const driver = neo4jLoader();
  global.Driver = driver;
  Logger.info('🚀  DB loaded and connected!');
};
