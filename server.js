const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static("public"));

// Socket.io
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

// IMPORTANT: Railway port
const PORT = process.env.PORT || 3000;

// IMPORTANT: listen on 0.0.0.0
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
