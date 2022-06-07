const { Router } = require("express");
const Chat = require("../models/").chat;
const router = new Router();
const authMiddleware = require("../auth/middleware");
const { toData } = require("../auth/jwt");

router.post("/", async (req, res) => {
  const { room, author, receiver, message, time } = req.body;
  if (!room || !author || !receiver || !message) {
    return res
      .status(400)
      .send("Please provide an room, author, receiver and a message");
  }

  try {
    const newChat = await Chat.create({
      room,
      author,
      receiver,
      message,
      time,
    });

    req.app.io.on("connection", (socket) => {
      socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
      });
    });

    res.status(200).send({ message: "OK" });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log(req.query.userId);
    const chats = await Chat.findAll({
      where: {
        receiver: req.query.userId,
      },
    });

    res.status(200).send(chats);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
