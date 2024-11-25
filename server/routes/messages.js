const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Add new message
router.post('/', async (req, res) => {
  const message = new Message(req.body);
  await message.save();
  res.status(201).json(message);
});

// Get all messages (admin view)
router.get('/', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

module.exports = router;
