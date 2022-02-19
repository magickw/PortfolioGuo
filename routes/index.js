// Dependencies
const router = require('express').Router();
// API routes folder
const main = require('routes/main.js');

router.use('/', main);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;