"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      owner.hasMany(models.pets);
      owner.belongsToMany(models.user, {
        through: "ratings",
        foreignKey: "ownerId",
      });
    }
  }
  owner.init(
    {
      name: DataTypes.STRING,
      city: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      description: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "owner",
    }
  );
  return owner;
};
