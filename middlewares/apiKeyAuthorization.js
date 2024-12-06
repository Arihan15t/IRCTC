const { ForbiddenError } = require("../utils/responseHandler");

require("dotenv").config();

const apiKeyAuth = (req, res, next) => { 
  const apiKey = req.header("x-api-key");
  const validApiKey = process.env.ADMIN_API_KEY;

  if (!apiKey || apiKey !== validApiKey) {
    return ForbiddenError(res, "Invalid API Key");
  }

  next(); 
};

module.exports = apiKeyAuth;
