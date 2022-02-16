const router = require('express').Router();
const projectRoutes = require('./project-routes');


// Define route path for the API to use, e.g. api/users/

router.use('/projects', projectRoutes);

module.exports = router;