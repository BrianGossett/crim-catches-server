"use strict";
const { db } = require("../utils/admin");

exports.removeFish = async (req, res) => {
      try{
            var game = req.query.game;
            game = game.replace("_", " ");
            var fish = req.query.fish;
            const newFishRef = db.collection('CrimsCastFishTacker');
            newFishRef.doc(game).collection('Fish').doc(fish).delete();
            return res.status(201).json({ message: "Fish removed successfully" });
        } catch (error) {
            return res
            .status(500)
            .json({ general: "Something went wrong, please try again",
            err: error});          
        }
};