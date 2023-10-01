import db from "../models/index.js";
const getListComment = async (limit, page, idShowing) => {
  try {
    const { count, rows } = await db.Comment.findAndCountAll({
      limit: +limit,
      offset: +(page - 1) * limit,
      where: {
        showingId: idShowing,
      },
      include: [
        {
          model: db.User,
          attributes: ["id", "username"],
        },
      ],
      order: [["createdAt", "DESC"]],
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
const reCacularRating = async (idShowing, newRating) => {
  const avgRating = await db.Showing.findOne({
    attributes: ["rating"],
    where: {
      id: idShowing,
    },
  });
  const { rows, count } = await db.Comment.findAndCountAll({
    where: {
      showingId: idShowing,
    },
  });
  db.Showing.update(
    {
      rating: (
        (avgRating.rating * (count - 1) + newRating) /
        (count + 1)
      ).toFixed(1),
    },
    {
      where: {
        id: idShowing,
      },
    }
  );
};
const createComment = async (data) => {
  console.log("data==>", data);
  try {
    const checkComment = await db.Comment.findOne({
      where: {
        userId: data.userId,
        showingId: data.showingId,
      },
    });
    if (checkComment) {
      await updateComment(data);
      await reCacularRating(data.showingId, data.rating);
      return {
        EC: 200,
        EM: "Comment already exists",
        DT: null,
      };
    }
    const comment = await db.Comment.create(data);
    await reCacularRating(data.showingId, data.rating);
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
        showingId: data.showingId,
        userId: data.userId,
      },
    });
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
