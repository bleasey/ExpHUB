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
const {errorMiddleware} = require('./middleware/errorMiddleware')


const app = express();
app.use(cors());
app.use(morgan('tiny'))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',require('./routes/authRoutes'));
app.use('/admin',require('./routes/admin'));
app.use('/gyan',require('./routes/gyanRoutes'));
app.get('/',(req,res)=>{
    res.send('<a href="/auth/google">Sign in with google</a>');
})
app.get('/user',(req,res)=>{
  res.status(200).json({...req.user})
})

app.use(errorMiddleware);

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