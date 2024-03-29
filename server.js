const db = require ('./config/mongoose')
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);






db.once("open",()=> {
  app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
})