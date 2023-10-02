import { getAllGift } from "../service/giftService.js";
const getAllGiftController = async (req, res) => {
  const result = await getAllGift();
  return res.status(result.EC).json(result);
};
module.exports = {
  getAllGiftController,
};
