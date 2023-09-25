"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Upcoming extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Upcoming.init(
    {
      name: DataTypes.STRING,
      time: DataTypes.STRING,
      timeStart: DataTypes.STRING,
      description: DataTypes.STRING,
      genre: DataTypes.STRING,
      category: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Upcoming",
    }
  );
  return Upcoming;
};
