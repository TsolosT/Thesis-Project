require('dotenv').config();
//config local server port
const port=process.env.PORT || 3000;
//requires
const express = require("express"),
      app = express(),
      path = require("path"),
      expressSanitizer = require("express-sanitizer"),
      bodyParser       = require("body-parser"),
      methodOverride = require("method-override");

//require routes
const formRoutes = require('./routes/form');
const indexRoutes = require('./routes/index');

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }));
// To parse incoming JSON in POST request body:
app.use(express.json())
// To 'fake' put/patch/delete requests:
app.use(methodOverride('_method'));
// Views,Public folder and EJS setup:
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(expressSanitizer());


//Routes
app.use(formRoutes);
app.use(indexRoutes);

//Server Start Point
app.listen(port, process.env.IP, function() {
  console.log(
    `Server has started on 3000 port local 
    or click the link -> http://localhost:3000/
    Are u bored?Pff then....press ctrl+C to stop !`
  );
});