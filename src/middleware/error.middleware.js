const ResponseError = require("../util/response.error");

/**
 *
 * @param {ResponseError} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
module.exports = (err, req, res, next) => {
  if (err instanceof ResponseError) {
    res.status(err.status).json({
      error: true,
      message: err.message,
    });
  } else {
    res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
};
