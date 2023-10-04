import db from "../models/index.js";
const createTransaction = async (transaction) => {
  try {
    const transactionCreated = await db.Transaction.create({
      name: transaction.name,
      idUser: transaction.idUser,
      imgUrl: transaction.imgUrl,
      quantity: transaction.quantity,
      price: transaction.price,
      totalPrice: transaction.totalPrice,
      seat: transaction.seat,
      screen: transaction.screen,
      createdAt: new Date(),
    });
    return {
      EC: 200,
      EM: "Create transaction successfully",
      DT: transactionCreated,
    };
  } catch (error) {
    console.log(error);
  }
};
const getAllTransaction = async (id) => {
  try {
    const transaction = await db.Transaction.findAll({
      where: {
        idUser: id,
      },
    });
    return {
      EC: 200,
      EM: "Get all transaction successfully",
      DT: transaction,
    };
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createTransaction,
  getAllTransaction,
};
