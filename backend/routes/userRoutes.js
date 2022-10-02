const express = require('express');
const router = express.Router();
const {registerUser, loginUser,getUser} = require('../controllers/user');

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/',getUser);

module.exports = router;