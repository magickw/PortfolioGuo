// Dependencies
const router = require('express').Router();
// API routes folder
const homeRoutes = require('routes/home-routes');

router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;