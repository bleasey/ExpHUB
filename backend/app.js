const express = require('express');
require('dotenv').config();
const {connectDB} = require('./config/db');

const app = express();

app.use('/user',require('./routes/userRoutes'));

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