"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pets",
      [
        {
          name: "Sussy",
          description: "Sussy likes kisses and blueberry",
          age: 2,
          available: true,
          ownerId: 1,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "lilo",
          description:
            "lilo has a lot of love to give, and is looking for friends to play and have fun together",
          age: 3,
          available: true,
          ownerId: 2,
          speciesId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Billy",
          description:
            "Billy has a lot of love to give, and is looking for friends to play and have fun together",
          age: 1,
          available: false,
          ownerId: 3,
          speciesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Levi",
          description: "Levi a bunny that likes to pretend hes a dog",
          age: 1,
          available: true,
          ownerId: 4,
          speciesId: 3,
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
