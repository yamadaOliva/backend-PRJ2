import tiketService from "../service/ticketServices.js";
const getAllTicket = async (req, res) => {
  try {
    const result = await tiketService.getAllTicket();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAllTicket,
};
