"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      like.belongsTo(models.user);
      like.belongsTo(models.place);
    }
  }
  like.init(
    {
      userId: DataTypes.INTEGER,
      tipId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "like",
    }
  );
  return like;
};
