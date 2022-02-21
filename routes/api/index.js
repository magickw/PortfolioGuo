const router = require('express').Router();

const projectRoutes = require('./project-routes');

router.use('/projects', projectRoutes);


module.exports = router;