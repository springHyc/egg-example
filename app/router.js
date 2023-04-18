'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getNowTime', controller.home.getNowTime);
  router.get('/news', controller.news.list);
  router.get('/news2', controller.news.list2);
  router.get('/getSchema', controller.schema.cache);
};
