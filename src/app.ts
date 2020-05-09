import 'reflect-metadata';
import 'dotenv/config';
import express, { Application } from 'express';
import 'express-async-errors';

import handleExceptionError from './middlewares/handleExceptionError';
import uploadConfig from './config/upload';

import routes from './routes';
import './database';

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
