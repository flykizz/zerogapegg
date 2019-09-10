'use strict';
// app/service/topics.js
const Service = require('egg').Service;

class InterfaceService extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = '/api/v1';
  }

  async create(params) {
    const result = await this.ctx.curl(`${this.root}/interface`, {
      method: 'post',
      data: params,
      dataType: 'json',
      contentType: 'json',
    });
    this.checkSuccess(result);
    return result.data.topic_id;
  }
  async show(params) {
    const ctx = this.ctx;
    return {
      result: []
    }
  }
  async edit(params) {
    const ctx = this.ctx;
    ctx.validate(createRule, ctx.request.body);
    const id = await this.ctx.curl(`${this.root}/interface`, {
      method: 'post',
      data: params,
      dataType: 'json',
      contentType: 'json',
    });
  }
  async update(params) {
    const ctx = this.ctx;
    ctx.validate(createRule, ctx.request.body);
    const id = await await this.ctx.curl(`${this.root}/interface`, {
      method: 'post',
      data: params,
      dataType: 'json',
      contentType: 'json',
    });
  }
  async destroy(params) {
    const ctx = this.ctx;
    const id = await this.ctx.curl(`${this.root}/interface`, {
      method: 'post',
      data: params,
      dataType: 'json',
      contentType: 'json',
    });
  }
  async list(params) {
    const ctx = this.ctx;
    return {
      result: []
    }
  }
  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkSuccess(result) {
    if (result.status !== 200) {
      const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      // 远程调用返回格式错误
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }
}

module.exports = InterfaceService;
