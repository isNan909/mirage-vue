import { Server, Response } from 'miragejs';
import podcasters from '@/data/podcasters';

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    environment,
    routes() {
      this.namespace = '/api';
      this.get('/podcasters', schema => {
        return new Response(1000, {}, podcasters);
      });
      this.post(
        '/podcasters',
        (schema, request) => {
          const headers = {};
          const podcasters = JSON.parse(request.requestBody);
          return new Response(200, headers, {
            msg: `You followed : ${podcasters.heading} for your podcast. Thanks!`
          });
        },
        { timing: 1000 }
      );
    }
  });
  return server;
}
