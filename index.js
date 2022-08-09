"use strict";
const express = require('express');
const app = express();

const { gameList } = require('./handlers/GameList');
const { gamesFish } = require('./handlers/GamesFish');
const { addFish } = require('./handlers/AddFish');
const { addGame } = require('./handlers/AddGame');
const { removeFish } = require('./handlers/RemoveFish');

const PORT = process.env.PORT || 5050


//const { db } = require("./utils/admin");

app.get('/', (req, res) => {
    res.send('You should not be here')
})

app.get('/gamelist', gameList);

app.get('/gamesfish', gamesFish);

app.post('/newfish', addFish);

app.post('/newgame', addGame);

app.post('/removefish', removeFish);

app.listen(PORT, function () {
console.log(`Demo project at: ${PORT}!`); });
