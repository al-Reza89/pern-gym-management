const jwt = require("jsonwebtoken");
const { createError } = require("./error.js");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(401, "token is not valid!"));
    // console.log(user);
    req.user = user;
    console.log(req.user);
    next();
  });
};

const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(401, "token is not valid!"));
    req.user = user;
    console.log(req.user);
    if (req.user.id === req.params.id || req.user.isadmin) {
      next();
    } else {
      return next(createError(401, "you are not authoreized"));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(401, "token is not valid!"));
    req.user = user;
    console.log(req.user);
    if (req.user.isadmin) {
      next();
    } else {
      return next(createError(401, "you are not authoreized"));
    }
  });
};

module.exports = {
  verifyToken,
  verifyAdmin,
  verifyUser,
};
