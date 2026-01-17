require("dotenv").config();
const http = require("http");
const app = require("./app");

const socketInit = require("./config/socket");

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

// init socket
socketInit(server);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
