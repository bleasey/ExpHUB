const express = require('express');
const router = express.Router();
const passport = require('passport');
const {logout} = require('../controllers/auth');

router.get('/google',  passport.authenticate('google', { scope: [ 'email', 'profile' ] }));
router.get(
  "/google-callback",
  passport.authenticate("google", {
    successRedirect: "/user",
    failureRedirect: "/auth/google/failure",
  })
);

router.get("/logout", logout);

router.get("/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

module.exports = router;