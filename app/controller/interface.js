'use strict';
const Controller = require('egg').Controller;

const createRule = {
  accesstoken: 'string',
  title: 'string',
  tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
  content: 'string',
};

class InterFaceController extends Controller {
  async index() {
    return this.list();
  }
  async create() {
    const ctx = this.ctx;
    ctx.validate(createRule, ctx.request.body);
    const id = await ctx.service.interface.create(ctx.request.body);
    ctx.body = {
      topic_id: id,
    };
    ctx.status = 201;
  }
  async show() {
    const ctx = this.ctx;
    const detail = await ctx.service.interface.show(ctx.request.body);
    ctx.body = {
      result: [],
      abc: []
    };
    ctx.status = 201;
  }
  async edit() {
    const ctx = this.ctx;
    ctx.validate(createRule, ctx.request.body);
    const id = await ctx.service.interface.edit(ctx.request.body);
    ctx.body = {
      topic_id: id,
    };
    ctx.status = 201;
  }
  async update() {
    const ctx = this.ctx;
    ctx.validate(createRule, ctx.request.body);
    const id = await ctx.service.interface.update(ctx.request.body);
    ctx.body = {
      topic_id: id,
    };
    ctx.status = 201;
  }
  async destroy() {
    const ctx = this.ctx;
    const id = await ctx.service.interface.destroy(ctx.request.body);
    ctx.body = {
      topic_id: id,
    };
    ctx.status = 201;
  }
  async list() {
    const ctx = this.ctx;
    console.log(ctx);
    ctx.body = {
      result: 'fdas',
    };
    ctx.status = 200;
  }
}

module.exports = InterFaceController;
