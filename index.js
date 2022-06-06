const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");

app.use(cors());

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use("/auth", authRouter);
app.use("/user", userRouter);

const server = http.createServer(app);
const PORT = 4000;
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["instant-chat-header"],
    credentials: true,
  },
});
//CONNECTION
io.on("connection", (socket) => {
  console.log(`Made socket connection: ${socket.id}`);
  //ROOM
  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(PORT, () => {
  console.log("SERVER IS RUNNING on", PORT);
});
