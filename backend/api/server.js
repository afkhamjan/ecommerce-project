const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// Simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working on Vercel!' });
});

// Export for Vercel
module.exports = app;