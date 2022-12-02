import { createClient } from 'next-sanity';
import sanity from './studio/sanity.json';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: sanity.api.projectId,
  apiVersion: '2022-02-03',
  useCdn: true,
};

export const sanityClient = createClient(config);
