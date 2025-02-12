// Express
const express = require('express');

const app = express();

app.get('/currenttime',  function(req, res) {
  res.send('<h1>' + new Date().toISOString() + '</h1>');
}); // localhost:3000/currenttime

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
}); // localhost:3000

app.listen(3000);


// Http
// function handleRequest(request, response) {
//   // localhost:3000
//   // localhost:3000/currenttime
//   if (request.url === '/currenttime') {
//     response.statusCode = 200;
//     response.end('<h1>' + new Date().toISOString() + '</h1>');
//   } else if (request.url === '/'){
//     response.statusCode = 200;
//     response.end('<h1>Hello World</h1>');
//   }
  
// }

// const server = http.createServer(handleRequest);

// server.listen(3000)
// amazon.com:80 -> 80 - port, amazon.com - domen
// 3000 port - not default for production app

