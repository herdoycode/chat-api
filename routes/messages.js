import express from "express";
import { Message } from "../models/message.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const message = new Message({
    chatId: req.body.chatId,
    sender: req.body.sender,
    content: req.body.content,
  })

  await message.save();

  res.send(message);
});

router.get("/:chatId", async (req, res) => {
  const messages = await Message.find({ chatId: req.params.chatId });
  res.send(messages);
});

export default router;
