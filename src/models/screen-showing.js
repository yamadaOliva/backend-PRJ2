'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScreenShowing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  ScreenShowing.init({
    screenId: DataTypes.INTEGER,
    showingId: DataTypes.INTEGER,
    timeList: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ScreenShowing',
  });
  return ScreenShowing;
};