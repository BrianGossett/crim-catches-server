const { db } = require("../utils/admin");

exports.gamesFish = async (req, res) => {
    const fishTrackerRef = db.collection('CrimsCastFishTacker');
    try{
        var game = req.query.game;
        game = game.replace("_", " ");
        fishTrackerRef.doc(game).collection('Fish').get().then((snapshot2) => {
            const data = snapshot2.docs.map((nestDoc) => ({
            id: nestDoc.id,
            ...nestDoc.data(),
            }));
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};