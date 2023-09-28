import db from "../models/index.js";
const getListComment = async (limit, page, idShowing) => {
  try {
    const { count, rows } = await db.Comment.findAndCountAll({
      limit: +limit,
      offset: +(page - 1) * limit,
      where: {
        showingId: idShowing,
      },
    });
    return {
      EC: 200,
      EM: "Get list comment successfully",
      DT: {
        count,
        rows,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
const findCommetById = async (id) => {
  try {
    const comment = await db.Comment.findByPk(id);
    return {
      EC: 200,
      EM: "Get comment successfully",
      DT: comment,
    };
  } catch (error) {
    console.log(error);
  }
};
const createComment = async (data) => {
  try {
    const checkComment = await findCommetById(data?.id);
    if (checkComment.DT)
      return {
        EC: 400,
        EM: "Comment already exists",
        DT: null,
      };
    const comment = await db.Comment.create(data);
    return {
      EC: 200,
      EM: "Create comment successfully",
      DT: comment,
    };
  } catch (error) {
    console.log(error);
  }
};
const updateComment = async (data) => {
  try {
    const comment = await db.Comment.update(data, {
      where: {
        id : data.id,
      },
    });
    return {
      EC: 200,
      EM: "Update comment successfully",
      DT: comment,
    };
  } catch (error) {
    console.log(error);
  }
};
const deleteComment = async (id) => {
  try {
    const comment = await db.Comment.destroy({
      where: {
        id,
      },
    });
    return {
      EC: 200,
      EM: "Delete comment successfully",
      DT: comment,
    };
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getListComment,
  findCommetById,
  createComment,
  updateComment,
  deleteComment,
};
