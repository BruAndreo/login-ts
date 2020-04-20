import express from 'express';
import morgan from 'morgan';

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
    this.application.get('/', (req, res) => res.send('oi'));
  }
}

export default new App().application;
