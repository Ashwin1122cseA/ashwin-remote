const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// ✅ VERY IMPORTANT: root route (fixes 502)
app.get("/", (req, res) => {
  res.status(200).send("Ashwin Remote is LIVE 🚀");
});

// serve static files
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

const PORT = process.env.PORT || 3000;

// ✅ VERY IMPORTANT: listen on 0.0.0.0
server.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});
