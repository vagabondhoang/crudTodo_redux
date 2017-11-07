import Hapi from 'hapi';
import db from './database';
import routes from './routes/index';

const server = new Hapi.Server();
server.connection({
  port: 8080,
  host: 'localhost',
});

server.route(routes);

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});