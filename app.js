/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// app
const app = express();

// database
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => console.log('Database connected'))

// routes
app.get('/', (req, res) => {
  res.send('test');
});

// dotenv
const port = process.env.PORT || 8000;

// server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
