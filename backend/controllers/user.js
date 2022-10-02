const registerUser = async (req,res)=>{
    res.json({msg:'Register user'});
}

const loginUser = async (req, res) => {
  res.json({ msg: "Login user" });
};

const getUser = async (req,res)=>{
    res.json({msg:'User Details'})
}

module.exports = {registerUser,loginUser,getUser}