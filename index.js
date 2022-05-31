const express = require("express");
const socket = require("socket.io");

const ownersRouter = require("./routers/owners");
const app = express();
const port = 4000;

app.use(express.json());
app.use("/owners", ownersRouter);

const server = app.listen(port, () =>
  console.log(`App listening on port ${port}!`)
);

//socket set up
const io = socket(server);
io.on("connection", function (socket) {
  console.log("make socket connection");
});
