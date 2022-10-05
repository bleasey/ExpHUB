const express = require('express');
const cookieParser = require("cookie-parser");
require('dotenv').config();
const {connectDB} = require('./config/db');
const session = require("express-session");
const passport = require('passport')
require('./config/auth');
const morgan = require('morgan')
const cors = require('cors');
const {sessionOptions} = require('./config/session')


const app = express();
app.use(cors());
app.use(morgan('tiny'))
app.use(cookieParser());

const oneDay = 1000 * 60 * 60 * 24;

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

app.use('/user',require('./routes/userRoutes'));
app.get('/',(req,res)=>{
    res.send('<a href="/user/auth/google">Sign in with google</a>');
})

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(`Listening at port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()