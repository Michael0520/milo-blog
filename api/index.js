import { createRequestHandler } from '@tanstack/start/server';

export default createRequestHandler({
  build: () => import('../.output/server/index.mjs'),
});