const jwt = require("../util/jwt");

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = auth.split(" ")[1];

  try {
    req.user = jwt.verifyAccessToken(token);
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token expired or invalid" });
  }
};
