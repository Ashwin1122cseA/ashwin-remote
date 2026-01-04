const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

// BASIC HTTP RESPONSE (MANDATORY)
app.get("/", (req, res) => {
  res.status(200).send("Ashwin Remote Server Running");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

const PORT = process.env.PORT;
if (!PORT) {
  console.error("PORT not found");
  process.exit(1);
}

server.listen(PORT, "0.0.0.0", () => {
  console.log("Listening on port", PORT);
});
