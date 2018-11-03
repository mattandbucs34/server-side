1\. Why is the `fs` core module important for Node development?<br>
>The `fs` core module is important because it connects to the file system and interacts with files on the server.

2\. What is the difference between sync and non-sync methods in the fs module?<br>
>Sync or synchronus is when operations perform in order. Asynchronus or non-sync methods are operations that operate when other operations are busy, they skip order based on other occupied operations.<br>

3\. Why are modules used?<br>
>Modules are used to simplify application development. Modules allow code, programs or methods to be modular and to be used in multiple aspects of an application. Modules create libraries for easier access to methods in multiple parts of an application.

4\. Why are libraries such as fs used in Node programming?
>To allow for simplicity and consistency in programming.


```
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
    return console.log('There was an error encountered: errof ${err});
  }

  console.log('listening to port ${port});
});

```