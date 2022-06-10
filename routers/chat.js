const { Router } = require("express");
const Chat = require("../models/").chat;
const router = new Router();
const authMiddleware = require("../auth/middleware");
const { toData } = require("../auth/jwt");
const { Op } = require("sequelize");

router.post("/", async (req, res) => {
  const {
    room,
    authorId,
    authorName,
    receiverId,
    receiverName,
    message,
    time,
  } = req.body;
  if (!room || !authorId || !receiverId || !message) {
    return res
      .status(400)
      .send("Please provide an room, author, receiver and a message");
  }

  try {
    const newChat = await Chat.create({
      room,
      authorId,
      authorName,
      receiverId,
      receiverName,
      message,
      time,
    });

    res.status(200).send({ message: "OK" });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const chats = await Chat.findAll({
      where: {
        [Op.or]: [
          { receiverId: req.user.dataValues["id"] },
          { authorId: req.user.dataValues["id"] },
        ],
      },
      order: [["createdAt", "ASC"]],
    });

    res.status(200).send(chats);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
