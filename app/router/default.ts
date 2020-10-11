import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
};
