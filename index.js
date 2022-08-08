"use strict";
const express = require('express');
const app = express();

const { gameList } = require('./handlers/GameList');
const { gamesFish } = require('./handlers/GamesFish');
const { addFish } = require('./handlers/AddFish');

const PORT = process.env.PORT || 5050


//const { db } = require("./utils/admin");

app.get('/', (req, res) => {
    res.send('This is my demo project')
})

app.get('/gamelist', gameList);

app.get('/gamesfish', gamesFish);

app.post('/newfish', addFish);


app.listen(PORT, function () {
console.log(`Demo project at: ${PORT}!`); });
