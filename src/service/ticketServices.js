import db from "../models/index.js";
const getAllTicket = async () => {
  try {
    const ticket = await db.Sale.findAll();
    return {
      EC: 200,
      EM: "Get all ticket successfully",
      DT: ticket,
    };
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAllTicket,
};
