const express = require('express');
const router = express.Router();
const passport = require('passport');
const {getUser,logout} = require('../controllers/user');
const {isLoggedIn} = require('../middleware/authMiddleware');


router.get('/auth/google',  passport.authenticate('google', { scope: [ 'email', 'profile' ] }));
router.get(
  "/google-callback",
  passport.authenticate("google", {
    successRedirect: "/user",
    failureRedirect: "/user/google/failure",
  })
);
router.get('/',isLoggedIn,getUser);

router.get("/logout", logout);

router.get("/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

module.exports = router;