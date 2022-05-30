"use strict";
const bcrypt = require("bcrypt");
const { stringify } = require("nodemon/lib/utils");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "species",
      [
        {
          name: "Dog",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bunny",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bird",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "reptile",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Other",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("species", null, {});
  },
};
