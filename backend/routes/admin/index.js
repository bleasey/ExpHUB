const express = require('express')

const router = express.Router();

router.use('/category',require('./categoryRoutes'));
router.use('/question',require('./questionRoutes'));

module.exports = router;