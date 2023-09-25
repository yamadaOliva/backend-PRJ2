"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Showing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Showing.belongsToMany(
        models.Screen,
        { through: models.ScreenShowing },
        { foreignKey: "showingId" }
      );
    }
  }

  Showing.init(
    {
      name: DataTypes.STRING,
      time: DataTypes.STRING,
      timeStart: DataTypes.STRING,
      genre: DataTypes.STRING,
      category: DataTypes.STRING,
      rating: DataTypes.STRING,
      description: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Showing",
    }
  );
  return Showing;
};
