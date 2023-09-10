const bcrypt = require("bcrypt");
const User = require("../models/user.js"); /* user schema to validate */
const jwt = require("jsonwebtoken");



const hashPassword = (req, res, next) => {
  try {
    const passPlain = req.body.password;

    const hashPassword = bcrypt.hashSync(passPlain, 10);

    req.body.password = hashPassword;

    next();
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
/* middleware to verify that the password matches the user */
const verifyPassword = (req, res, next) => {
  const passPlain = req.body.password; /* not hashed pass */
  const hashPassword =
    req.user
      .password; /* user founded in last middleware that stores the password as it is on db */
  const isValid = bcrypt.compareSync(passPlain, hashPassword);

  if (isValid) {
    next();
  } else {
    res.status(400).json({
      message: "Wrong password!",
    });
  }
};

/* method to verify that user exists in the db */
const verifyUserExists = async (req, res, next) => {
  const { email } = req.body;
  const userFounded = await User.findOne({ email: email });

  if (userFounded) {
    /* if user exists  asign it to the user property on the request */
    req.user = userFounded;

    next();
  } else {
    res.status(400).json({ message: "User not found" });
  }
};

/* middleware that generates JWT token */
const generateToken = (req, res, next) => {
  try {
      let secretKey = process.env.SECRET_KEY; /* using enviorement variables for security */

      /* library that generates the token. Takes 3 args 2 mandatory: body of the token and secrete key, lastly when the token expires */
      let token = jwt.sign({ email: req.body.email }, secretKey, { expiresIn: '5m' });

      req.token = token; /* saves the generated token on the property  */
      next();

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { hashPassword, verifyPassword, verifyUserExists,generateToken };
