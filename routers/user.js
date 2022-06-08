const { Router } = require("express");
const router = new Router();
const User = require("../models").user;
const Owner = require("../models").owner;
const Pets = require("../models").pets;
const Rating = require("../models").rating;
const Species = require("../models").species;
const authMiddleware = require("../auth/middleware");

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

router.patch("/edit", authMiddleware, async (req, res) => {
  const { email, name, isOwner, city, imageUrl, description, pet } = req.body;
  console.log(pet);
  try {
    const updatedUser = await User.update(
      {
        email,
        name,
        owner: isOwner,
        city,
        imageUrl,
        description,
      },
      {
        where: { id: req.user.dataValues["id"] },
      }
    );

    if (isOwner) {
      console.log(updatedUser);
      const rating = await Rating.findOne({
        where: { userId: req.user.dataValues["id"] },
      });
      const owner = await Owner.findByPk(rating.ownerId);
      const updatedPet = await Pets.update(
        {
          name: pet.name,
          description: pet.description,
          age: parseInt(pet.age, 10),
          available: pet.available,
          ownerId: owner.id,
          speciesId: parseInt(pet.speciesId, 10),
        },
        {
          where: { ownerId: owner.id },
        }
      );
    }

    res.status(200).send({ message: "Profile updated successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).send("invalid ID");
  }
});

module.exports = router;
