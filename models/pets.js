"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pets.belongsTo(models.owner, { foreignKey: "ownerId" });
      pets.belongsTo(models.species, { foreignKey: "speciesId" });
    }
  }
  pets.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      age: DataTypes.INTEGER,
      available: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "pets",
    }
  );
  return pets;
};
