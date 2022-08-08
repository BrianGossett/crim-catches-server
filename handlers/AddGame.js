"use strict";
const { db } = require("../utils/admin");

exports.addGame = async (req, res) => {
      try{
            var game = req.query.game;
            game = game.replace("_", " ");
            const newFishRef = db.collection('CrimsCastFishTacker');
            newFishRef.doc(game).set({});
            return res.status(201).json({ message: "Game added successfully" });
        } catch (error) {
            return res
            .status(500)
            .json({ general: "Something went wrong, please try again",
            err: error});          
        }
};