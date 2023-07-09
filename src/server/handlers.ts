import { example } from './data';
import { rest } from 'msw';

export const handlers = [
  rest.get('/example', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(example));
  }),
  rest.post('/example', async (req, res, ctx) => {
    example.push(await req.json());
    return res(ctx.status(201));
  }),
];
