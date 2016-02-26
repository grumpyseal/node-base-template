
import server from './lib/server';

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
})
