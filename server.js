const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const _ = require('underscore');


//INITIALIZE EXPRESS, CONNECT TO HTML & API ROUTES
var app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app')));


const htmlRoutes = require("./app/routing/htmlRoutes")(app);
const apiRoutes = require("./app/routing/apiRoutes")(app);
const friends = require("./app/data/friends");

app.listen(PORT);

