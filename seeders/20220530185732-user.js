"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "linda@l.com",
          password: bcrypt.hashSync("l", SALT_ROUNDS),
          owner: true,
          name: "Linda",
          city: "amsterdam",
          imageUrl:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg",
          description:
            "Lilo has a lot of love to give, and is looking for friends to play and have fun together",
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "vivi@v.com",
          password: bcrypt.hashSync("v", SALT_ROUNDS),
          owner: false,
          name: "Vivian",
          city: "amsterdam",
          imageUrl:
            "https://personalpaws.nl/wp-content/uploads/Wie-ben-ik-pagina.jpg",
          description:
            "I have a lot of free time on the weekends, and would be more than happy to take care of a pet ",
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "lucas@l.com",
          password: bcrypt.hashSync("l", SALT_ROUNDS),
          owner: true,
          name: "Lucas",
          city: "Aalsmeer",
          imageUrl:
            "https://thesustainabilityproject.life/wp-content/uploads/2019/02/Blog-Post-1-Picture-3-1080x721.jpg",
          description:
            "Billy has a lot of love to give, and is looking for friends to play and have fun together",
          rating: 3,
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
