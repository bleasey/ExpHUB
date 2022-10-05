const MongoStore = require('connect-mongo');

const oneDay = 1000 * 60 * 60 * 24;

const sessionStore = MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    ttl: oneDay
})

const sessionOptions = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  store:sessionStore
};

module.exports = {sessionOptions}