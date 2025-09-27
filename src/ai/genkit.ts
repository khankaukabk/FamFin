
import { genkit, type GenkitOptions } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

const genkitOptions: GenkitOptions = {
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
    }),
  ],
  enableTracingAndMetrics: true,
};

export const ai = genkit(genkitOptions);
