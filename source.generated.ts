import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { fromConfig } from 'fumadocs-mdx/runtime';
import type * as Config from './source.config';

export const create = fromConfig<typeof Config>();

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource({
    files: [
      {
        pattern: 'content/**/*.mdx',
        collection: 'docs',
      },
    ],
  }),
});

export const docs = {
  doc: create.doc("docs", "./content", {}),
  meta: create.meta("docs", "./content", {})
};