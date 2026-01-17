const { Server } = require("socket.io");

/**
 *
 * @param {http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>} server
 */
module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("🟢 Client connected");

    socket.on("disconnect", () => {
      console.log("🔴 Client disconnected");
    });
  });
};
