const express = require('express')
const {
    getAllGyans,
    getSingleGyan,
    addGyan,
    updateGyan,
    deleteGyan
} = require('../controllers/gyan')

const router = express.Router();

router.route('/')
.get(getAllGyans)
.post(addGyan)

router.route('/:id')
.get(getSingleGyan)
.patch(updateGyan)
.delete(deleteGyan)

module.exports = router