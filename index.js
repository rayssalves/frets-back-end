const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

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

// const express = require("express");
// const cors = require("cors");
// const { createServer } = require("http");
// const { Server } = require("socket.io");

// const app = express();

// app.use(cors());
// app.use(express.json());

// const PORT = 4000;
// //socket connection
// const httpServer = createServer();

// const io = require("socket.io")(httpServer, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["instant-chat-header"],
//     credentials: true,
//   },
// });

// io.on("connection", (socket) => {
//   console.log("made socket connection", socket.id);
//   socket.on("message", (arg) => {
//     console.log(arg);
//   });
//   // socket.send(<channel>, <content>)
// });
// //room
// socket.on("join_room", (data) => {
//   socket.join(data);
// });

// socket.on("send_message", (data) => {
//   socket.to(data.room).emit("receive_message", data);
// });

// httpServer.listen(PORT, () => {
//   console.log("server is running on ", PORT);
// });
