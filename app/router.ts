import { Application } from 'egg';
import defaultRoute from './router/default';

export default (app: Application) => {
  const { controller, router } = app;
  defaultRoute(app);
  router.get('/', controller.home.index);
  router.get('/list', controller.home.list);
};
