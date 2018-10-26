const http = require('http');
const port = 3000;
const fs = require('fs');

const requestHandler = (request,response) => {
  fs.writeFileSync('hello-world.txt','"Hello to this great world"','utf8');
  response.end();
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if(err) {
    return console.log('There was an error encountered: error ${err}');
  };

  console.log('listening to port ${port}');
});