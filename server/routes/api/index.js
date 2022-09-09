const router = require('express').Router();

const advocateRoutes = require('./advocateRoutes');
const inventoryRoutes = require('./inventoryRoutes');

router.use('/advocate', advocateRoutes);
router.use('/inventory', inventoryRoutes);

module.exports = router;
