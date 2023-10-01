'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  Sale.init({
    icon: DataTypes.STRING,
    title: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    description: DataTypes.STRING,
    type : DataTypes.INTEGER,
    timeStart: DataTypes.STRING,
    timeEnd: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};