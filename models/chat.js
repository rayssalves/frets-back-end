"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      chat.belongsToMany(models.user, {
        through: "userChats",
        foreignKey: "chatId",
      });
    }
  }
  chat.init(
    {
      message: DataTypes.TEXT,
      sent: DataTypes.BOOLEAN,
      visualized: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "chat",
    }
  );
  return chat;
};
