const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static("public"));

// ✅ IMPORTANT: root HTTP response (fixes 502)
app.get("/", (req, res) => {
  res.status(200).send("Ashwin Remote Server is running ✅");
});

// Socket.io connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Railway PORT (MANDATORY)
const PORT = process.env.PORT || 3000;

// ✅ Listen on all interfaces
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
