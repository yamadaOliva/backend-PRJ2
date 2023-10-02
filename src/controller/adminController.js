import {
  findUserById,
  getUserList,
  blockUser,
  deleteUser,
} from "../service/adminService.js";
const findUserByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await findUserById(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
  return res.status(result.EC).json(result);
};
const getUserListController = async (req, res) => {
  const result = await getUserList();
  return res.status(result.EC).json(result);
};
const blockUserController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await blockUser(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
const deleteUserController = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteUser(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  findUserByIdController,
  getUserListController,
  blockUserController,
  deleteUserController,
};
