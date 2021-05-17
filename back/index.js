const express = require("express");
const app = express(); // create express app
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const notion = require('./routes/notion');
const global = require('./routes/global')
require('dotenv').config();

app.use(cors());
app.use('/notion', notion);
app.use('/', global);

app.listen(PORT, () => {
  console.log("server started on port 5000");
});