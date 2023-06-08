const path = require("path");

const { API_URL, PROGRESSBAR_COLOR, GOOGLE_ANALYTICS_CODE, MOMENT_LOCALE } =
  process.env;

const serverRuntimeConfig = {
  API_URL,
  PROGRESSBAR_COLOR,
  GOOGLE_ANALYTICS_CODE,
  MOMENT_LOCALE,
};

const publicRuntimeConfig = {
  API_URL,
  PROGRESSBAR_COLOR,
  GOOGLE_ANALYTICS_CODE,
  MOMENT_LOCALE,
};

module.exports = {
  serverRuntimeConfig,
  publicRuntimeConfig,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
