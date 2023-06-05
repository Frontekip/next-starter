const path = require("path");

const { API_URL } = process.env;

const serverRuntimeConfig = {
  API_URL,
};

const publicRuntimeConfig = {
  API_URL,
};

module.exports = {
  serverRuntimeConfig,
  publicRuntimeConfig,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
