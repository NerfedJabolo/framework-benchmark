import { Elysia, t } from 'elysia';
import { hash } from 'bun';

new Elysia({ prefix: '/api' })
  .get('/', () => 'Hi')
  .get('/id/:id', (c) => `${c.params.id} ${c.query.name}`)
  .post('/json', (c) => c.body, { type: 'json' })
  .post('/api/hash', (c) => hash(`${c.body.a}${c.body.b}`), {
    body: t.Object({
      a: t.String(),
      b: t.String(),
    }),
  });
