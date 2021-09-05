const router = require('express').Router();
const saveRoutes = require('./saveRoutes')


//router for saveroutes file
router.use(saveRoutes);

module.exports = router;