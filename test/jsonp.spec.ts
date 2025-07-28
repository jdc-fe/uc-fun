import assert = require('power-assert');
import Sinon = require('sinon');
import jsonp, { buildUrl } from '../src/jsonp';

describe.only('jsonp', () => {
  let server: Sinon.SinonFakeServer;
  beforeEach(() => {
    server = Sinon.fakeServer.create();
  })
  afterEach(() => server && server.restore())
  it('normal', async () => {
    // server.respondWith('GET', '/users?page=1&pageSize=10', [
    //   200,
    //   { 'Content-Type': 'application/json' },
    //   'ok'
    // ]);
    const url = buildUrl('/users', { page: 1, pageSize: 10 });
    assert.equal(url, '/users?page=1&pageSize=10');

    const url2 = buildUrl('/users?a=1', { page: 1, pageSize: 10 });
    assert.equal(url2, '/users?a=1&page=1&pageSize=10');
  })
})
