import neo4j from 'neo4j-driver';
import { Driver } from 'neo4j-driver-core';

import { NEO_URI, NEO_USERNAME, NEO_PASSWORD } from '@config/config';

export default (): Driver => {
  try {
    const driver: Driver = neo4j.driver(
      NEO_URI,
      neo4j.auth.basic(NEO_USERNAME, NEO_PASSWORD)
    );
    return driver;
  } catch (error) {
    Logger.error(`🥺 Database connection error: error`);
    throw error;
  }
};
