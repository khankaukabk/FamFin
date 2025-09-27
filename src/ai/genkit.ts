
'use server';

import { genkit, type GenkitOptions } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

const genkitOptions: GenkitOptions = {
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
};

export const ai = genkit(genkitOptions);
