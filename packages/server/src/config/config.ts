import dotenv from 'dotenv';

dotenv.config();

function getEnvVar(v: string): string {
  const ret = process.env[v];
  if (ret === undefined) {
    throw new Error('process.env.' + v + ' is undefined!');
  }
  return ret;
}

export const PORT: string = getEnvVar('PORT');
export const MONGO_URI: string = getEnvVar('MONGO_URI');
