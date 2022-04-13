/* eslint-disable no-var */
import { Logger } from 'winston';
import { Driver } from 'neo4j-driver-core';

import loggerLoader from './logger';
import neo4jLoader from './neo4j';

import 'reflect-metadata';

declare global {
  var Logger: Logger;
  var Driver: Driver;
}

export default async () => {
  global.Logger = loggerLoader;
  Logger.info('🚀  Logger loaded!');

  const driver = neo4jLoader();
  global.Driver = driver;
  Logger.info('🚀  DB loaded and connected!');
};
