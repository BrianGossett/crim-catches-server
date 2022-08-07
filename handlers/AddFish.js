"use strict";
const { db } = require("../utils/admin");

exports.addFish = async (req, res) => {
      try{
            var game = req.query.game;
            var fish = JSON.parse(req.query.fish);
            const newFishRef = db.collection('CrimsCastFishTacker');
            newFishRef.doc(game).collection('Fish').add(fish);
        } catch (error) {
            return res
            .status(500)
            .json({ general: "Something went wrong, please try again",
            err: error});          
        }
};