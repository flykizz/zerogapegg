'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.resources('interface', '/api/interface', controller.interface);
  // router.get('/api/interface/list', controller.interface.list);
};
