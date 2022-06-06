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
          comment: "Myllo is adorable, I love having him over",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ownerId: 2,
          userId: 3,
          stars: 4,
          comment: "Myllo is adorable, I love having him over",
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
