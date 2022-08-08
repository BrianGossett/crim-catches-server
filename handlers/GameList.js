const { db } = require("../utils/admin");

exports.gameList = async (req, res) => {
    const fishTrackerRef = db.collection('CrimsCastFishTacker');
    try{
        fishTrackerRef.get().then((snapshot1) => {
            const data = snapshot1.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            return res.status(201).json(data);
        });
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};