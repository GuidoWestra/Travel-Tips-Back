"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      place.hasMany(models.tip);
    }
  }
  place.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      city: DataTypes.STRING,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "place",
    }
  );
  return place;
};
