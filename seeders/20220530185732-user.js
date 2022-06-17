"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "rayssa@r.com",
          password: bcrypt.hashSync("r", SALT_ROUNDS),
          owner: true,
          name: "Rayssa",
          city: "Amsterdam",
          imageUrl: "https://www.abc.net.au/news/image/7504198-3x4-700x933.jpg",
          description:
            "Sussy is a amazing dog,very easy to take care of, she needs a friend on Mondays to play for s few hours",
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "linda@l.com",
          password: bcrypt.hashSync("l", SALT_ROUNDS),
          owner: true,
          name: "Linda",
          city: "amsterdam",
          imageUrl:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg",
          description: "I wanna help take care of a pet and have a pet friend",
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
        {
          email: "martin@m.com",
          password: bcrypt.hashSync("m", SALT_ROUNDS),
          owner: true,
          name: "Martin",
          city: "Almere",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5cae0ddae6666951990c3129/1599155613615-JLY64ERQRGGP9S6J2O6M/20200902_143511.jpg",
          description:
            "Do you have experience with bunnys? Levi need a friend on Tuesdays ",
          rating: 5,
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
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
