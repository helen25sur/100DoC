// import package
const express = require('express');
const path = require('path');
const fs = require('fs');

// create app
const app = express();

// middleware for static files into public folder
app.use(express.static('public'));
// for reading and writing into files
app.use(express.urlencoded({extended: false}));

// 1. Create route to '/' path
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(filePath);
});

app.get('/restaurants', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'restaurants.html');
  res.sendFile(filePath);
});

app.get('/recommend', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'recommend.html');
  res.sendFile(filePath);
});

app.post('/recommend', (req, res) => {
  const restaurant = req.body;
  const pathFile = path.join(__dirname, 'data', 'restaurants.json');
  const fileData = fs.readFileSync(pathFile);
  const arrData = JSON.parse(fileData);
  arrData.push(restaurant);
  const textData = JSON.stringify(arrData);
  fs.writeFileSync(pathFile, textData);

  res.redirect('/confirm');
});

app.get('/about', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'about.html');
  res.sendFile(filePath);
});

app.get('/confirm', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'confirm.html');
  res.sendFile(filePath);
});

// listen port
app.listen(3000);