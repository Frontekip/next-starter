const path = require("path");

const { API_URL, PROGRESSBAR_COLOR, GOOGLE_ANALYTICS_CODE } = process.env;

const serverRuntimeConfig = {
  API_URL,
  PROGRESSBAR_COLOR,
  GOOGLE_ANALYTICS_CODE,
};

const publicRuntimeConfig = {
  API_URL,
  PROGRESSBAR_COLOR,
  GOOGLE_ANALYTICS_CODE,
};

module.exports = {
  serverRuntimeConfig,
  publicRuntimeConfig,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
