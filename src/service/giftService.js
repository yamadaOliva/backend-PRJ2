import db from "../models/index.js";
const getAllGift = async () => {
  try {
    const gift = await db.Gift.findAll();
    return {
      EC: 200,
      EM: "Get all gift successfully",
      DT: gift,
    };
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAllGift,
};
