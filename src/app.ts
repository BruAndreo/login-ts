import express from 'express';
import morgan from 'morgan';

import routes from './routes';

class App {
  public application: express.Application;

  public constructor() {
    this.application = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.application.use(express.json());
    this.application.use(morgan('dev'));
  }

  private routes(): void {
    this.application.use(routes);
  }
}

export default new App().application;
