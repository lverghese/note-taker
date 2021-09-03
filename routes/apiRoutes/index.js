const router = require('express').Router();
const saveRoutes = require('./saveRoutes')

router.use(saveRoutes);

module.exports = router;