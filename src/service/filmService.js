import db from "../models/index.js";
const getListShowing = async (limit, page) => {
  try {
    const listShowing = await db.Showing.findAll({
      limit: +limit,
      offset: +(page - 1) * limit,
      include: [
        {
          model: db.Screen,
          atrributes: ["name"],
        },
      ],
    });
    return {
      EC: 200,
      EM: "Get list showing successfully",
      DT: listShowing,
    };
  } catch (error) {
    console.log(error);
  }
};
const getUpcomingList = async (limit, page) => {
  try {
    const listUpcoming = await db.Upcoming.findAll({
      limit: +limit,
      offset: +(page - 1) * limit,
    });
    return {
      EC: 200,
      EM: "Get list upcoming successfully",
      DT: listUpcoming,
    };
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getListShowing,
  getUpcomingList,
};
