import { routes } from '@stricjs/app';
import { text, json, status } from '@stricjs/app/send';
import { qs, guard } from '@stricjs/utils';
import * as parser from '@stricjs/app/parser';
import { hash } from 'bun';

// Parse query and only get the value of key 'name'
const getName = qs.searchKey('name');

const parseJSON = parser.json(
  guard.create({
    a: 'str',
    b: 'str',
  })
);

export default routes('/api')
  .get('/', () => text('Hi'))
  .get('/id/:id', (c) => text(`${c.params.id} ${getName(c)}`))
  .post('/json', (c) => c.json().then(json))

  .post('/hash', async (c) => {
    const body = await parseJSON(c);

    return body === null
      ? status(400)
      : text(hash(`${body.a}${body.b}`).toString());
  });
