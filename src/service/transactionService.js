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
      address: transaction.address,
      type: transaction.type,
      time : transaction.time,
      createdAt: new Date(),
      idFilm: transaction.idFilm,
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
const check  = async (userId, filmId) => {
  try {
    const transaction = await db.Transaction.findOne({
      where: {
        idUser: userId,
        idFilm: filmId,
      },
    });
    if (transaction) {
      return {
        EC: 200,
        EM: "Get all transaction successfully",
        DT: transaction,
      };
    } else {
      return {
        EC: 400,
        EM: "Get all transaction successfully",
        DT: transaction,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createTransaction,
  getAllTransaction,
  check,
};
