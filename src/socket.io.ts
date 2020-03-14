
import * as http from 'http';
export default function (app: any, socket) {
  const server = http.createServer(app.callback());
  const io = socket(server, {
    path: '/socket',
    serveClient: false,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
  });
  // middleware
  io.use((socket: any, next: any) => {
    next();
  });

  io.on('connection', function (socket: any) {
  });

  io.on('error', function (err:Error) {
  });

  server.listen(3006)
}