'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/news.test.js', () => {
  it('should assert', async () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should GET /news', async () => {
    return app.httpRequest().get('/news').expect(200);
  });
});
