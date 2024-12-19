const express = require('express');
const router = express.Router();

// Example API route
router.get('/', (req, res) => {
  res.json({ message: 'Hello from the API' });
});

module.exports = router;

