"use strict";
const bcrypt = require("bcrypt");
const { stringify } = require("nodemon/lib/utils");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "chats",
      [
        {
          message: "Hello your dog is cute",
          sent: true,
          visualized: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Hello lets set a day for you to take care of Myllo",
          sent: false,
          visualized: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("chats", null, {});
  },
};
