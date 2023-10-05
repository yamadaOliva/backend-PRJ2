"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Transaction.init(
    {
      name: DataTypes.STRING,
      idUser: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      imgUrl: DataTypes.STRING,
      price: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      seat: DataTypes.STRING,
      screen: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
