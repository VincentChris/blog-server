import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const result = await this.app.mysql.get('blog_content', {});
    console.log(result);
    this.ctx.body = result;
  }
}
