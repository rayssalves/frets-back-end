"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          ownerId: 1,
          userId: 1,
          stars: 5,
          comment: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          userId: 3,
          stars: 4,
          comment: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 3,
          userId: 4,
          stars: 4,
          comment: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 4,
          userId: 4,
          stars: 4,
          comment: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ratings", null, {});
  },
};
