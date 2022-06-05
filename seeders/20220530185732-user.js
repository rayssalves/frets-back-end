"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "test@test.com",
          password: bcrypt.hashSync("tes", SALT_ROUNDS),
          owner: true,
          name: "Linda",
          city: "amsterdam",
          imageUrl:
            "https://media.istockphoto.com/photos/she-loves-him-as-much-as-he-loves-her-picture-id620008846?k=20&m=620008846&s=612x612&w=0&h=ylY9nK3XkuhQCcqL4K_EUJnayUOYseoJfNWp68SZ3Lk=",
          description:
            "Myllo has a lot of love to give, and is looking for friends to play and have fun together",
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          owner: false,
          name: "Linda",
          city: "amsterdam",
          imageUrl:
            "https://media.istockphoto.com/photos/she-loves-him-as-much-as-he-loves-her-picture-id620008846?k=20&m=620008846&s=612x612&w=0&h=ylY9nK3XkuhQCcqL4K_EUJnayUOYseoJfNWp68SZ3Lk=",
          description:
            "Myllo has a lot of love to give, and is looking for friends to play and have fun together",
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
