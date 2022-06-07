const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Owner = require("../models/").owner;
const Pet = require("../models/").pets;
const Rating = require("../models/").rating;
const { SALT_ROUNDS } = require("../config/constants");
const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, user: user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  // pet = {
  //   name: name,
  //   description: description,
  //   age: age,
  //available,
  //specie
  // }
  console.log(req.body);
  const { email, password, name, isOwner, city, imageUrl, description, pet } =
    req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      owner: isOwner,
      city,
      imageUrl,
      description,
    });
    console.log("HIT");
    if (isOwner) {
      const newOwner = await Owner.create();

      const newRating = await Rating.create({
        ownerId: newOwner.id,
        userId: newUser.id,
      });

      const newPet = await Pet.create({
        name: pet.name,
        description: pet.description,
        age: parseInt(pet.age, 10),
        available: pet.available,
        ownerId: newOwner.id,
        speciesId: parseInt(pet.specie, 10),
      });
    }

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, user: newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
