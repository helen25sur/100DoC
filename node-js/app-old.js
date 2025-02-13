// Core node.js packages
const fs = require('fs');
const path = require('path');
// Express
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/currenttime',  function(req, res) {
  res.send('<h1>' + new Date().toISOString() + '</h1>');
}); // localhost:3000/currenttime

app.get('/all-users', function(req, res) {
  const filePath = path.join(__dirname, 'data', 'users.json');
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = '<ul>';
  for (let user of existingUsers) {
    responseData += '<li>' + user + '</li>';
  }
  responseData += '</ul>';

  res.send(responseData);
});

app.get('/', function(req, res) {
  res.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username" /><button>Submit</button></form>');
}); // localhost:3000

app.post('/store-user', function(req, res) {
  const userName = req.body.username;
  console.log(userName);

  const filePath = path.join(__dirname, 'data', 'users.json');
  // 1. read file
  const fileData = fs.readFileSync(filePath);
  // 2. parse from text to js-array
  const existingUsers = JSON.parse(fileData);
  // 3. update array
  existingUsers.push(userName);
  // 4. write to file raw text --> stringify method
  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send('<h1>Username stored!</h1>');
})

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

