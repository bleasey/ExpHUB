function isLoggedIn(req, res, next) {
  if(req.user) next()
  else{
    res.status(401).redirect('/');
  }
}

module.exports = {isLoggedIn};