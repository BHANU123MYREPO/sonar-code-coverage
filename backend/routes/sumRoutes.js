// src/routes/sumRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { a, b } = req.query;
  if (a && b) {
    const sum = parseInt(a) + parseInt(b);
    res.json({ sum });
  } else {
    res.status(400).json({ error: 'Missing query parameters a and b' });
  }
});

module.exports = router;
