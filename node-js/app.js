// import package
const express = require('express');
const path = require('path');
const fs = require('fs');

// create app
const app = express();

app.set('views', path.join(__dirname, 'views'));
// add template engine
app.set('view engine', 'ejs');

// middleware for static files into public folder
app.use(express.static('public'));
// for reading and writing into files
app.use(express.urlencoded({extended: false}));

// 1. Create route to '/' path
app.get('/', (req, res) => {
  // const filePath = path.join(__dirname, 'views', 'index.html');
  // res.sendFile(filePath);

  // ejs gives possibility to render page, not sendFile
  res.render('index');
});

app.get('/restaurants', (req, res) => {
  const pathFile = path.join(__dirname, 'data', 'restaurants.json');
  const fileData = fs.readFileSync(pathFile);
  const arrData = JSON.parse(fileData);
  res.render('restaurants', { countRestaurants: arrData.length, restaurants: arrData });
});

app.get('/recommend', (req, res) => {
  res.render('recommend');
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
  res.render('about');
});

app.get('/confirm', (req, res) => {
  res.render('confirm');
});

// listen port
app.listen(3000);