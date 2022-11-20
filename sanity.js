import { createClient } from 'next-sanity';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-02-03',
  useCdn: true,
};

export const sanityClient = createClient(config);
