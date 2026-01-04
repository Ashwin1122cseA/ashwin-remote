const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// ✅ VERY IMPORTANT: root HTTP response
app.get("/", (req, res) => {
  res.status(200).send("Ashwin Remote Server is running 🚀");
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

// ✅ MUST use Railway PORT and bind correctly
const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log("Listening on port", PORT);
});
