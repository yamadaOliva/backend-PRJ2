import {
  createTransaction,
  getAllTransaction,
} from "../service/transactionService.js";
const createTransactionController = async (req, res) => {
  const { transaction } = req.body;
  console.log("=>>>", transaction);
  try {
    const result = await createTransaction(transaction);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
const getAllTransactionController = async (req, res) => {
  const { id } = req.query;
  try {
    const result = await getAllTransaction(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createTransactionController,
  getAllTransactionController,
};
