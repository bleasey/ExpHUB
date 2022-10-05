const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require('dotenv').config()
const {registerUser} = require('../controllers/user');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/user/google-callback",
    },
    registerUser
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});