import dotenv from 'dotenv';

dotenv.config();

function getEnvVar(v: string): string {
  const ret = process.env[v];
  if (ret === undefined) {
    throw new Error('process.env.' + v + ' is undefined!');
  }
  return ret;
}

export const NEO_URI: string = getEnvVar('NEO_URI');
export const NEO_USERNAME: string = getEnvVar('NEO_USERNAME');
export const NEO_PASSWORD: string = getEnvVar('NEO_PASSWORD');
