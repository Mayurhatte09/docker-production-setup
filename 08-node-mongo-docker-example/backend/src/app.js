const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://db:27017/mydb';

// Connect to MongoDB
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Simple schema
const Message = mongoose.model('Message', { text: String });

// Routes
app.get('/', (req, res) => res.send('Backend is running 🚀'));

app.get('/messages', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

app.post('/messages', async (req, res) => {
    const message = new Message({ text: req.body.text });
    await message.save();
    res.json(message);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));