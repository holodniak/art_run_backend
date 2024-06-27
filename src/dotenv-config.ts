// dotenv-config.ts
import { config } from 'dotenv';
import { resolve } from 'path';

const envFile = resolve(__dirname, '..', '.env');
config({ path: envFile });
