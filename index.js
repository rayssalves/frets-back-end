// const { Router } = require("express");
const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const ownersRouter = require("./routers/owners");

const app = express();
// const router = new Router();

app.use(cors());
app.use(express.json());
app.use("/owners", ownersRouter);

const PORT = 4000;
//socket connection
const httpServer = createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["instant-chat-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("made socket connection", socket.id);
});

httpServer.listen(PORT, () => {
  console.log("server is running on ", PORT);
});
