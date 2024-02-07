import "dotenv/config";
import express, { Express } from 'express';
import { routes } from './route/user.route';

class Server {
  private app: Express;

  constructor() {
    this.app = express();
    this.setup();
  }

  private setup(): void {
    this.app.use(express.json());
    this.app.use('/api/v1', routes.router);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  }
}

const server = new Server();
server.start(3000);

