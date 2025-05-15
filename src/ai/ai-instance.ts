import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  promptDir: './prompts',
  plugins: [
    googleAI({
      apiKey: process.env.AIzaSyDMQ1x20GoxJtNjx2Ye135yKs2sgCsnEs0,
    }),
  ],
  model: 'googleai/gemini-1.0-pro',
});
