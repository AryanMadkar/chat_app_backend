require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const connectDB = require("./db/db.connect");
const router = require("./routes/User.route");
const message_router = require("./routes/Message.route");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user", router);
app.use("/api/message", message_router);

// Start the server
function startServer() {
  connectDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();
