"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tip.belongsTo(models.user);
      tip.belongsTo(models.place);
    }
  }
  tip.init(
    {
      userId: DataTypes.INTEGER,
      userName: DataTypes.STRING,
      placeId: DataTypes.INTEGER,
      text: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "tip",
    }
  );
  return tip;
};
