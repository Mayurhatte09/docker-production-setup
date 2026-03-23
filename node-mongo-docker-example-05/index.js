const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://root:example@mongo:27017/messages?authSource=admin')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define schema
const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, default: "Mayur" } // default author
});

const Message = mongoose.model('Message', messageSchema);

// Routes
app.get('/', (req, res) => res.send('Hello from Node.js + MongoDB!'));

// Create a message
app.post('/messages', async (req, res) => {
  const message = new Message({ text: req.body.text });
  await message.save();
  res.json(message); // includes default author
});

// Get all messages
app.get('/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

// Delete a message by ID
app.delete('/messages/:id', async (req, res) => {
  await Message.findByIdAndDelete(req.params.id);
  res.json({ message: 'Message deleted successfully' });
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
