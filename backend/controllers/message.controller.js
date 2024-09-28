const Message = require("../models/message.model");
const Conservation = require("../models/conversion.model");
const sendmessage = async (req, res) => {
  try {
    const senderid = req.id;
    const receriverId = req.params.id;
    const { message } = req.body;
    let gotconservation = await Conservation.findOne({
      members: { $all: [senderid, receriverId] },
    });
    if (!gotconservation) {
      gotconservation = await Conservation.create({
        members: [senderid, receriverId],
      });
    }
    const newmessage = await Message.create({
      sender: senderid,
      receiver: receriverId,
      message: message,
    });
    if (newmessage) {
      gotconservation.messages.push(newmessage._id);
      await gotconservation.save();
    }

    res.status(200).json({ message: "Message sen t successfully" });
    console.log(senderid, receriverId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getmessage = async (req, res) => {
  try {
    const receiver = req.params.id;
    const sender = req.id;
    const conservation = await Conservation.findOne({
      members: { $all: [sender, receiver] },
    }).populate("messages");
    res.status(200).json(conservation.messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { sendmessage, getmessage };
