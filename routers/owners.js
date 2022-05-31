const { Router } = require("express");
const Owner = require("../models").owner;

const router = new Router();

//Get all owners from the Database
router.get("/", async (request, response) => {
  try {
    const owners = await Owner.findAll();
    response.status(200).send(owners);
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

module.exports = router;
