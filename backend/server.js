// src/server.js
const express = require('express');
const sumRoutes = require('./routes/sumRoutes');
const app = express();
const port = 3000;

// Use the sumRoutes for the "/sum" endpoint
app.use('/sum', sumRoutes);

app.get('/', (req, res) => {
  res.send('Hello, MERN!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app; // Export app for testing purposes

