const { Router } = require("express");
const router = new Router();
const User = require("../models").user;
const Owner = require("../models").owner;
const Pets = require("../models").pets;
const Rating = require("../models").rating;
const Species = require("../models").species;

//Get all owners from the Database
router.get("/", async (request, response) => {
  try {
    const users = await User.findAll({
      include: [
        { model: Owner, include: [{ model: Pets, include: [Species] }] },
        { model: Rating },
      ],
    });
    response.status(200).send(users);
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

module.exports = router;
