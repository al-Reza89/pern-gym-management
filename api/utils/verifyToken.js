const jwt = require("jsonwebtoken");
const { createError } = require("./error.js");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  //   console.log(token);
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(401, "token is not valid!"));
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      if (err) return next(createError(401, "you are not authoreized"));
    }
  });

  //   res.send("hello you get a user");
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isadmin) {
      console.log(req.user.isadmin);
      next();
    } else {
      if (err) return next(createError(401, "you are not authoreized"));
    }
  });
};

module.exports = {
  verifyToken,
  verifyAdmin,
  verifyUser,
};
