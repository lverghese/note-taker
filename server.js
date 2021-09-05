const fs = require("fs");
const express = require("express");
const path = require('path');

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes')


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);
 app.use('', apiRoutes);



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });