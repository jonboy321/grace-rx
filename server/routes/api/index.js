const router = require('express').Router();

const advocateRoutes = require('./advocateRoutes');

router.use('/advocate', advocateRoutes);

module.exports = router;
