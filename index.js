"use strict";
const express = require('express');
const app = express();

const { fishTracker } = require('./handlers/FishTracker');
const { addFish } = require('./handlers/AddFish');

const PORT = process.env.PORT || 5050


//const { db } = require("./utils/admin");

app.get('/', (req, res) => {
    res.send('This is my demo project')
})

app.get('/fish', fishTracker);


app.post('/newfish', addFish);


app.listen(PORT, function () {
console.log(`Demo project at: ${PORT}!`); });
