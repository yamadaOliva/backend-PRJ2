import db from "../models/index.js";
const findUserById = async (id) => {
  try {
    const user = await db.User.findByPk(id);
    return {
      EC: 200,
      EM: "Get user successfully",
      DT: user,
    };
  } catch (error) {
    console.log(error);
  }
};
const getUserList = async (limit, page) => {
  try {
    const { count, rows } = await db.User.findAndCountAll({
      limit: +limit,
      offset: +(page - 1) * limit,
      where: {
        role: 0,
      },
    });
    return {
      EC: 200,
      EM: "Get list user successfully",
      DT: {
        count,
        rows,
      },
    };
  } catch (error) {}
};
const blockUser = async (id) => {
  try {
    const user = await db.User.findByPk(id);
    if (!user) {
      return {
        EC: 400,
        EM: "User not found",
        DT: null,
      };
    }
    await db.User.update(
      {
        status: 0,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return {
      EC: 200,
      EM: "Block user successfully",
      DT: null,
    };
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (id) => {
  try {
    const user = await db.User.findByPk(id);
    if (!user) {
      return {
        EC: 400,
        EM: "User not found",
        DT: null,
      };
    }
    await db.User.destroy({
      where: {
        id: id,
      },
    });
    return {
      EC: 200,
      EM: "Delete user successfully",
      DT: null,
    };
  } catch (error) {
    console.log(error);
  }
};
