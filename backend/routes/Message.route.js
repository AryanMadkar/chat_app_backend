const express = require("express");
const message_router = express.Router();
const { sendmessage, getmessage } = require("../controllers/message.controller");
const { isauthenticated } = require("../middleware/Isauthenticated");
message_router.post("/sendmessage/:id", isauthenticated, sendmessage);
message_router.get("/getmessage/:id", isauthenticated, getmessage);

module.exports = message_router;


