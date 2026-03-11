// errorHandler.js
function errorHandler(err, req, res, next) {
  console.error(err.stack); // Log error stack to console for debugging

  // Send JSON response with status code and message
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
}

module.exports = errorHandler;
