var express = require('express');

const { fishTracker } = require('./handlers/FishTracker')

var app = express();

const PORT = process.env.PORT || 5050

const firebaseConfig = {
    apiKey: "AIzaSyCBn0MC-EhvifXkFnOsCAOpAv2eT52iIcU",
    authDomain: "crimcast-ada31.firebaseapp.com",
    projectId: "crimcast-ada31",
    storageBucket: "crimcast-ada31.appspot.com",
    messagingSenderId: "10749608484",
    appId: "1:10749608484:web:fe129e4382585281170eb1",
    measurementId: "G-PP090JC95W"
  };

app.get('/', (req, res) => {
    res.send('This is my demo project')
})

app.get('/fish', fishTracker);

app.listen(PORT, function () {
console.log(`Demo project at: ${PORT}!`); });
