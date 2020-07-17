import 'reflect-metadata';
import 'dotenv/config';
import express, { Application } from 'express';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import handleExceptionError from '@shared/infra/http/middlewares/handleExceptionError';

import routes from '@shared/infra/http/routes';
import '@shared/infra/typeorm';
import '@shared/container';

class App {
  public server: Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.server.use(express.json());
    this.server.use('/files', express.static(uploadConfig.directory));
  }

  routes(): void {
    this.server.use(routes);
    this.server.use(handleExceptionError);
  }
}

export default new App().server;
