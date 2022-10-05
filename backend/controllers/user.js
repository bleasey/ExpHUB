const User = require('../models/User')

const registerUser = async (accessToken, refreshToken, profile, cb) => {
  const { name, email } = profile._json;
  const user = await User.findOne({ email });
  let newUser;
  if (!user) {
    newUser = await User.create({
      name,
      email,
      roll:'211CS130'
    });
  } else {
    newUser = user;
  }
  return cb(null, newUser);
};

const getUser = async (req,res)=>{
    res.send(
      `<p>Name ${req.user.name}</p>
      <p>Roll ${req.user.roll}</p>
      <a href="/user/logout">Logout</a>
      `
    );
}

const logout = (req, res) => {
  req.logout((err)=>{
    if(err) console.log(err);
    else{
      req.session.destroy();
      res.status(200).redirect("/");
    }
  });
};

module.exports = {registerUser,getUser,logout}