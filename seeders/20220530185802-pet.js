"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pets",
      [
        {
          name: "lilo",
          description:
            "lilo has a lot of love to give, and is looking for friends to play and have fun together",
          age: 3,
          available: true,
          ownerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("pets", null, {});
  },
};
