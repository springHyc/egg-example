'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg,我是贺贺！';
  }

  // 获取当前时间
  async getNowTime() {
    const { ctx } = this;
    const query = this.ctx.query;
    ctx.body = `hi ${
      query.name
    }, now date is : ${new Date().toLocaleDateString()}`;
  }

  async getAppList() {
    const appList = await this.service.app.getAppList();
    this.ctx.body = {
      // this.ctx.body 为 egg 的上下文对象，可以直接返回数据
      code: 0,
      data: appList,
    };
  }
}

module.exports = HomeController;
